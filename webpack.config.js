const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src",
    "editor.worker": "monaco-editor/esm/vs/editor/editor.worker.js",
    "ts.worker": "monaco-editor/esm/vs/language/typescript/ts.worker",
    "html.worker": "monaco-editor/esm/vs/language/html/html.worker",
  },
  context: __dirname,
  devtool: false,
  module: {
    rules: [
      {
        test: /\.d.ts$/,
        use: ["raw-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf/,
        type: "asset/resource",
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: { "chrome": "98", } }],
              "@babel/preset-typescript",
            ],
            plugins: [["@babel/transform-react-jsx", { runtime: 'automatic', importSource: 'preact' }]],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    // Mock html-webpack-plugin node dependencies to run in a browser environment
    alias: {
      fs: require.resolve("./src/mocks/fs.js"),
      path: require.resolve("path-browserify"),
      tapable: require.resolve("./src/mocks/tapable.js"),
      webpack$: false,
      util: require.resolve("util"),
      "loader-utils": false,
      vm: false,
      "pretty-error": require.resolve("./src/mocks/prettyErrors.js"),
      "html-minifier-terser": false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: {},
        cwd: "() => '/'",
      },
    }),
  ],
};
