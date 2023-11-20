module.exports = class MissingParamError extends Error {
  constructor (paramName) {
    super(`MIssing param ${paramName}`)
    this.name = 'MissingParamError'
  }
}
