const { MongoClient } = require('mongodb')
const { MongoMemoryServer } = require('mongodb-memory-server')
const LoadUserByEmailRepository = require('./load-user-by-email-repository')
let con, mongoServer, db

const makeSut = () => {
  const userModel = db.collection('users')
  const sut = new LoadUserByEmailRepository(userModel)
  return {
    userModel,
    sut
  }
}

describe('LoadUserByEmail Repository', () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    con = await MongoClient.connect(mongoServer.getUri(), {})
    db = con.db(mongoServer.instanceInfo.dbName)
  })

  beforeEach(async () => {
    await db.collection('users').deleteMany()
  })

  afterAll(async () => {
    if (con) {
      await con.close()
    }
    if (mongoServer) {
      await mongoServer.stop()
    }
  })

  test('Should return null if no user is found', async () => {
    const { sut } = makeSut()
    const user = await sut.load('invalid_email@mail.com')
    expect(user).toBeNull()
  })

  test('Should return an user user is found', async () => {
    const { sut, userModel } = makeSut()
    const fakeUser = await userModel.insertOne({
      email: 'valid_email@mail.com',
      name: 'any_name',
      age: 20,
      state: 'any_state',
      password: 'hashed_password'
    })
    const user = await sut.load('valid_email@mail.com')
    console.log(fakeUser)
    expect(user._id).toEqual(fakeUser.insertedId)
  })
})
