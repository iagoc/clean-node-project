const MongoHelper = require('../helpers/mongo-helper')
const MissingParamError = require('../../utils/errors/missing-param-error')
const UpdateAccessTokenRepository = require('./update-access-token-repository')
let db, fakeUserId

const makeSut = () => {
  return new UpdateAccessTokenRepository()
}

describe('UpdateAccessToken Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect()
    db = MongoHelper.db
  })
  beforeEach(async () => {
    const userModel = db.collection('users')
    await MongoHelper.clearData('user')
    const fakeUser = await userModel.insertOne({
      email: 'valid_email@mail.com',
      name: 'any_name',
      age: 20,
      state: 'any_state',
      password: 'hashed_password'
    })
    fakeUserId = fakeUser.insertedId
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should update the user with the given accessToken', async () => {
    const sut = makeSut()
    await sut.update(fakeUserId, 'valid_token')
    const updateFakeUser = await db.collection('users').findOne({ _id: fakeUserId })
    expect(updateFakeUser.accessToken).toBe('valid_token')
  })

  test('Should throw if no params are provided', async () => {
    const sut = makeSut()
    expect(sut.update()).rejects.toThrow(new MissingParamError('userId'))
    expect(sut.update('any_id')).rejects.toThrow(new MissingParamError('accessToken'))
  })
})
