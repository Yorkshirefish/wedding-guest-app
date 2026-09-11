const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
    try {
        await client.connect();
        console.log("MongoDB Connected");
    } catch(e) {
        console.log(e);
    }
}

module.exports = { client, connectDB };