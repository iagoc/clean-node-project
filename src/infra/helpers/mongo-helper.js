const { MongoClient } = require('mongodb')
const { MongoMemoryServer } = require('mongodb-memory-server')

module.exports = {
  async connect () {
    this.mongoDb = await MongoMemoryServer.create()
    this.client = await MongoClient.connect(this.mongoDb.getUri(), {})
    this.db = this.client.db()
  },

  async disconnect () {
    await this.client.close()
    await this.mongoDb.stop()
  }
}
