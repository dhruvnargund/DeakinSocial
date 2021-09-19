require('dotenv').config();

const { MongoClient } = require('mongodb');

const uri = process.env.DB_URL_2;
const client = new MongoClient(uri);

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