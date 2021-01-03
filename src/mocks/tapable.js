export class AsyncSeriesWaterfallHook {
  promise(values) {
    return new Promise((resolve) => setTimeout(resolve)).then(() => values)
  }
}