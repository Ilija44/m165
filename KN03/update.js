var customerIdToUpdate = new ObjectId('60c72b2f9af1b2d9c35f1c2a'); 
var productId1 = new ObjectId('60c72b2f9af1b2d9c35f1c2b'); 
var productId2 = new ObjectId('60c72b2f9af1b2d9c35f1c2c'); 

db.kunden.updateOne(
    { _id: customerIdToUpdate },
    { $set: { adresse: 'Neue Adresse 123' } }
);


db.bestellungen.updateMany(
    { $or: [{ status: "abgeschlossen" }, { gesamtbetrag: { $gt: 400 } }] },
    { $set: { status: "offen" } }
);

db.produkte.replaceOne(
    { produktname: 'Smart Watch' },
    {
        produktname: 'Apple Smart Watch',
        preis: 249.5,
        beschreibung: 'Wearable Computer on your wrist from Apple',
        groesse: 5
    }
);
