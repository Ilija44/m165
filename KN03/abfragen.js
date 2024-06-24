const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('mydatabase');

        const kundeCollection = database.collection('Kunde');
        const mitarbeiterCollection = database.collection('Mitarbeiter');
        const produktCollection = database.collection('Produkt');


        const recentCustomers = await kundeCollection.find({ registeredAt: { $gte: new Date('2023-01-01') } }).toArray();
        console.log('Recent Customers:', recentCustomers);

       
        const specificEmployees = await mitarbeiterCollection.find({
            $or: [
                { position: 'Developer' },
                { position: 'Designer' }
            ]
        }).toArray();
        console.log('Specific Employees:', specificEmployees);

        
        const specificProducts = await produktCollection.find({
            $and: [
                { price: { $gte: 20 } },
                { stock: { $lte: 150 } }
            ]
        }).toArray();
        console.log('Specific Products:', specificProducts);

        
        const productsWithA = await produktCollection.find({ name: { $regex: 'A' } }).toArray();
        console.log('Products with A:', productsWithA);

       
        const customerEmails = await kundeCollection.find({}, { projection: { email: 1, _id: 1 } }).toArray();
        console.log('Customer Emails:', customerEmails);

        
        const employeeNames = await mitarbeiterCollection.find({}, { projection: { name: 1, _id: 0 } }).toArray();
        console.log('Employee Names:', employeeNames);

    } finally {
        await client.close();
    }
}

run().catch(console.dir);
