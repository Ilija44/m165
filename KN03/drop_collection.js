const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('mydatabase');

        await database.collection('Kunde').drop();
        await database.collection('Mitarbeiter').drop();
        await database.collection('Produkt').drop();

        console.log('Collections erfolgreich gelöscht');
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
