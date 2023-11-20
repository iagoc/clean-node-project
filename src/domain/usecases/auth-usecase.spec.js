const { MissingParamError } = require('../../utils/errors')

class AuthUseCase {
  async Auth (email) {
    if (!email) {
      throw new MissingParamError('email')
    }
  }
}

describe('Auth Case', () => {
  test('Should throw if no email is provided', async () => {
    const sut = new AuthUseCase()
    const promise = sut.Auth()
    expect(promise).rejects.toThrow(new MissingParamError('email'))
  })
})
