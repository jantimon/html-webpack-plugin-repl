import { JSX } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

const loader = () =>
  import(/* webpackChunkName: "monaco-editor"*/ "./monaco-editor");

/**
 * Add an additional source file to the language service.
 * Use this for typescript (definition) files that won't be loaded as editor documents, like jquery.d.ts.
 *
 *  @param content — The file content
 *
 * @param filePath — An optional file path
 *
 * @returns
 * A disposable which will remove the file from the language service upon disposal.
 */
export const addExtraLib = (content, filePath) => {
  loader().then(({ addExtraLib }) => addExtraLib(content, filePath));
};

const useEditorLib = () => {
  const [lib, setLib] = useState<undefined | typeof import("./monaco-editor")>(
    undefined
  );
  useEffect(() => {
    let active = true;
    loader().then((mod) => {
      if (!active) return;
      setLib(mod);
    });
    return () => {
      active = false;
    };
  }, []);
  return lib;
};

export const MonacoEditor = (
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    language: "html" | "typescript";
    codeValue: string;
    onCodeChange: (newCodeValue: string) => void;
  }
) => {
  const lib = useEditorLib();
  const { language, codeValue, onChange, ...htmlProps } = props;
  if (!lib) {
    return <div {...htmlProps} />;
  }
  const Editor = lib.MonacoEditor;
  return <Editor {...props} />;
};

export const MonacoViewer = (
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    language: "html" | "typescript";
    codeValue: string;
  }
) => {
  const lib = useEditorLib();
  const { language, codeValue, ...htmlProps } = props;
  if (!lib) {
    return <div {...htmlProps} />;
  }
  const Viewer = lib.MonacoViewer;
  return <Viewer {...props} />;
};
