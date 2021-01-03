module.exports = {
  readFileSync(fileName) {
    console.error('tried to read', fileName)
  },
  readFile(fileName) {
    console.error('tried to read', fileName)
  },
  existsSync(filename) {
    return false;
  }
}