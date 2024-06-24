const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('mydatabase');

        // Kunde Collection
        const kundeCollection = database.collection('Kunde');
        await kundeCollection.insertMany([
            { _id: new ObjectId(), name: 'John Doe', email: 'john.doe@example.com', registeredAt: new Date() },
            { _id: new ObjectId(), name: 'Jane Smith', email: 'jane.smith@example.com', registeredAt: new Date() },
            { _id: new ObjectId(), name: 'Alice Johnson', email: 'alice.johnson@example.com', registeredAt: new Date() }
        ]);

        // Mitarbeiter Collection
        const mitarbeiterCollection = database.collection('Mitarbeiter');
        await mitarbeiterCollection.insertOne({
            _id: new ObjectId(), name: 'Bob Brown', position: 'Manager', hiredAt: new Date()
        });

        await mitarbeiterCollection.insertMany([
            { _id: new ObjectId(), name: 'Charlie Green', position: 'Developer', hiredAt: new Date() },
            { _id: new ObjectId(), name: 'David Black', position: 'Designer', hiredAt: new Date() }
        ]);

        // Produkt Collection
        const produktCollection = database.collection('Produkt');
        await produktCollection.insertMany([
            { _id: new ObjectId(), name: 'Product A', price: 19.99, stock: 100 },
            { _id: new ObjectId(), name: 'Product B', price: 29.99, stock: 150 },
            { _id: new ObjectId(), name: 'Product C', price: 39.99, stock: 200 }
        ]);

        console.log('Datensätze erfolgreich hinzugefügt');
    } finally {
        await client.close();
    }
}

run().catch(console.dir);