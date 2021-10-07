require('dotenv').config();

const { MongoClient } = require('mongodb');

const uri = process.env.DB_URL;
const client = new MongoClient("mongodb+srv://harsha:reddy@cluster0.22slh.mongodb.net/DeakinSocial");

async function main() {
    try {
        await client.connect();
        await listDatabases(client);
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    console.log('Databases:');
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

exports.mongoClient = client;
