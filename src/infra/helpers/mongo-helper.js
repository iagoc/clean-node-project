const { MongoClient } = require('mongodb')
const { MongoMemoryServer } = require('mongodb-memory-server')

module.exports = {
  async connect () {
    this.mongoDb = await MongoMemoryServer.create()
    this.client = await MongoClient.connect(this.mongoDb.getUri(), {})
    this.db = this.client.db()
  },

  async clearData (table) {
    await this.db.collection(table).deleteMany()
  },

  async disconnect () {
    await this.client.close()
    await this.mongoDb.stop()
    this.client = null
    this.db = null
  },

  async getCollection (table) {
    if (!this.client) {
      await this.connect()
    }
    return this.db.collection(table)
  }
}
