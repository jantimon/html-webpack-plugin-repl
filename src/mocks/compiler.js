export const createCompilerMock = (onEmit, logging = false) => {

const mockHook = (hookName, ...mockArgs) => ({
  tap: (pluginName, ...tapArgs) => {
    const callback = tapArgs[tapArgs.length - 1];
    const result = callback(...mockArgs);
    logging && console.info('=> tap', hookName, pluginName, result);
  },
  tapAsync: (pluginName, ...tapArgs) => {
    const callback = tapArgs[tapArgs.length - 1];
    const result = callback.apply(null, mockArgs.concat((innerResult) => {
      logging && console.info('=> tapAsync Callback', hookName, pluginName, innerResult);
    }));
    logging && console.info('=> tapAsync', hookName, pluginName, result);
  },
})

let compilation = {
  outputOptions: {
    publicPath: '/'
  },
  assets: [],
  entrypoints: {
    keys: () => ['main'],
    get: () => ({
      getFiles: () => ['main.js', 'main.css']
    })
  },
  getAssetPath: (assetPath) => assetPath,
  errors: {
    push: console.error
  },
  emitAsset: (name, asset) => {
    logging && console.info('emitAsset', name, asset)
    onEmit(name, asset)
  }
}

compilation.hooks = {
  optimizeTree: mockHook('optimizeTree', [], []),
  processAssets: mockHook('processAssets', compilation),
  additionalAssets: mockHook('additionalAssets')
};

const compiler = {
  context: '/',
  options: {
    entry: {
      'main': './src/index.js'
    }
  },
  webpack: {
    Compilation: {
      PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE: 0
    },
    sources: {
      RawSource: class RawSource{
        constructor(value) {
          this.value = value;
        }
      }
    }
  },
  hooks: {
    initialize: mockHook('initialize'),
    make: mockHook('make', compilation),
    thisCompilation: mockHook('thisCompilation', compilation),
  },
}

return compiler;

}