module.exports = class PrettyError {
  withoutColors () {}
  render(val) {
    return String(val);
  }
  skipPackage () {}
  skipNodeFiles () {}
  skip () {}

}