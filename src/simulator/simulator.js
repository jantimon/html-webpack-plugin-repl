import { createCompilerMock } from "../mocks/compiler";

async function generateHTML(htmlWebpackPluginOptions = {}) {
  const HtmlWebpackPlugin = (await import("html-webpack-plugin")).default;
  const options = {
    templateContent: ({htmlWebpackPlugin}) => `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${htmlWebpackPlugin.options.title}</title>
      </head>
      <body>
      </body>
    </html>`,
    ...htmlWebpackPluginOptions,
    minify: false,
  };
  // As we don't have a file system we can't support templates:
  delete options.template;

  const htmlWebpackPlugin = new HtmlWebpackPlugin(options);

  return new Promise((resolve) => {
    htmlWebpackPlugin.apply(
      createCompilerMock((name, result) => {
        resolve({name, value: result.value});
      })
    );
  })
}

export async function getFormattedHtml(htmlWebpackPluginOptions = {}) {
  const prettifierPromise = import('pretty');
  const result = await generateHTML(htmlWebpackPluginOptions);
  const pretty = (await prettifierPromise).default;
  return pretty(result.value);
}
