/**
 * Usage execute the html-webpack-plugin with the given options
 * @param htmlWebpackPluginOptions 
 */
export const getFormattedHtml = async (htmlWebpackPluginOptions: any) => {
  const simulator = await import( /* webpackChunkName: "simulator"*/ './simulator');
  return simulator.getFormattedHtml(htmlWebpackPluginOptions);
}