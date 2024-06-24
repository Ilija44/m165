db.kunden.updateOne({ _id: ObjectId('CUSTOMER_ID_TO_UPDATE') }, { $set: { adresse: 'Neue Adresse 123' } });
db.bestellungen.updateMany({ $or: [{ status: "abgeschlossen" }, { gesamtbetrag: { $gt: 400 } }] }, { $set: { status: "offen" } });
db.produkte.replaceOne({ produktname: 'Smart Watch' }, {
    produktname: 'Apple Smart Watch',
    preis: 249.5,
    beschreibung: 'Wearable Computer on your wrist from Apple',
    groesse: 5
});
