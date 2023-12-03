const { MongoClient } = require('mongodb')
const { MongoMemoryServer } = require('mongodb-memory-server')

class LoadUserByEmailRepository {
  constructor (userModel) {
    this.userModel = userModel
  }

  async load (email) {
    const user = await this.userModel.findOne({ email })
    return user
  }
}

describe('LoadUserByEmail Repository', () => {
  let con, mongoServer, db

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
    const userModel = db.collection('users')
    const sut = new LoadUserByEmailRepository(userModel)
    const user = await sut.load('invalid_email@mail.com')
    expect(user).toBeNull()
  })

  test('Should return an user user is found', async () => {
    const userModel = db.collection('users')
    await userModel.insertOne({
      email: 'valid_email@mail.com'
    })
    const sut = new LoadUserByEmailRepository(userModel)
    const user = await sut.load('valid_email@mail.com')
    expect(user.email).toBe('valid_email@mail.com')
  })
})
