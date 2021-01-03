import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import "./app.css";
import {
  addExtraLib,
  MonacoEditor,
  MonacoViewer,
} from "./monaco-editor/monaco-lazy";
import { getFormattedHtml } from "./simulator/simulator-lazy";

const root = document.createElement("div");
document.body.appendChild(root);

// Reuse types from node_modules/html-webpack-plugin/index.d.ts
addExtraLib(
  // Set external types to any
  `
  type AsyncSeriesWaterfallHook = any;
  type Compiler = any;
  type Compilation = any;
  type HtmlMinifierOptions = any;
  ` +
    // Get all typings as globals from node_modules
    require("!!raw-loader!html-webpack-plugin/typings.d.ts").default.split(
      "export = HtmlWebpackPlugin;"
    )[1],
  "file:///node_modules/@types/html-webpack-plugin/index.d.ts"
);

const useHtmlCompiler = (code: string): string => {
  const [html, setHtml] = useState("");
  useEffect(() => {
    let isActive = true;
    try {
      const executer = new Function("HtmlWebpackPlugin", code);
      executer(
        class HtmlWebpackPlugin {
          constructor(options) {
            getFormattedHtml(options).then((result) => {
              // Stop if unmounted or changed in the meantime
              if (!isActive) {
                return;
              }
              setHtml(result);
            });
          }
        }
      );
    } catch (e) {}
    return () => {
      isActive = false;
    };
  }, [code]);
  return html;
};

const useUpdateCodeInUrl = (code) => {
  useEffect(() => {
    history.replaceState(
      {},
      document.title,
      document.location.href.replace(/\?.+$/, "") +
        "?code=" +
        encodeURIComponent(code)
    );
  }, [code]);
};

const getInitialCode = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const codeFromUrl = searchParams.get("code");
  if (codeFromUrl) {
    return codeFromUrl;
  }
  const optionsFromUrl = searchParams.get("options");
  if (optionsFromUrl) {
    return `new HtmlWebpackPlugin({
  ${optionsFromUrl.replace(/^[\s\n\r]*\{?/, '').replace(/\}[\s\n\r]*$/, '')}
});
`
  }
  return `new HtmlWebpackPlugin({

});
`;
}

export const App = () => {
  const [code, setCode] = useState(getInitialCode);
  useUpdateCodeInUrl(code);
  const html = useHtmlCompiler(code);
  return (
    <>
      <h1 style={{ color: "#fff", fontWeight: "normal" }}>
        html-webpack-plugin live repl
      </h1>
      <MonacoEditor
        codeValue={code}
        language="typescript"
        onCodeChange={setCode}
        style={{
          background: "#1e1e1e",
          maxWidth: 950,
          width: "100%",
          height: 200,
          marginBottom: 20,
        }}
      />
      <MonacoViewer
        codeValue={html}
        language="html"
        style={{
          background: "#1e1e1e",
          maxWidth: 950,
          width: "100%",
          height: 300,
          marginBottom: 20,
        }}
      />
      <span style={{ color: "#fff" }}>
        Version: {require("html-webpack-plugin/package.json").version}
      </span>
    </>
  );
};

render(<App />, root);
