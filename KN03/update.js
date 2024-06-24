const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('mydatabase');

        const kundeCollection = database.collection('Kunde');
        const mitarbeiterCollection = database.collection('Mitarbeiter');
        const produktCollection = database.collection('Produkt');

        // updateOne() mit _id als Filterung
        const kundeIdToUpdate = new ObjectId('ID_HERE');
        await kundeCollection.updateOne({ _id: kundeIdToUpdate }, { $set: { email: 'new.email@example.com' } });

        // updateMany() mit ODER-Verknüpfung
        await produktCollection.updateMany(
            { $or: [{ price: { $lt: 30 } }, { stock: { $gt: 150 } }] },
            { $set: { discount: true } }
        );

        // replaceOne()
        const mitarbeiterIdToReplace = new ObjectId('ID_HERE');
        await mitarbeiterCollection.replaceOne(
            { _id: mitarbeiterIdToReplace },
            { name: 'Eve White', position: 'HR', hiredAt: new Date() }
        );

        console.log('Datensätze erfolgreich verändert');
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
