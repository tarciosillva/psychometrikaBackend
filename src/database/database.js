const { MongoClient } = require("mongodb");
require("dotenv-safe").config();

const uri = process.env.URI

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    return await client.connect();
  } catch (err) {
    await client.close();
    console.error(err);
  }
}

module.exports = run();