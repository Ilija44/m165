var kundenID1 = new ObjectId();
var kundenID2 = new ObjectId();
var kundenID3 = new ObjectId();

var produktID1 = new ObjectId();
var produktID2 = new ObjectId();
var produktID3 = new ObjectId();
var produktID4 = new ObjectId();
var produktID5 = new ObjectId();

var mitarbeiterID1 = new ObjectId();
var mitarbeiterID2 = new ObjectId();

var bestellungID1 = new ObjectId();
var bestellungID2 = new ObjectId();
var bestellungID3 = new ObjectId();
var bestellungID4 = new ObjectId();

db.produkte.insertMany([
    { _id: produktID1, produktname: "Laptop", beschreibung: "A Modern Laptop with Top features", preis: 699, groesse: 15, bestellungen: [bestellungID1] },
    { _id: produktID2, produktname: "Smart Watch", beschreibung: "Wearable Computer on your wrist", preis: 249, groesse: 5, bestellungen: [bestellungID2] },
    { _id: produktID3, produktname: "Wired Headphones", beschreibung: "Cheap with mediocre quality", preis: 24, groesse: 2, bestellungen: [bestellungID3] },
    { _id: produktID4, produktname: "USB Drive 64GB", beschreibung: "USB Drive for storing your files on the go", preis: 12, groesse: 1, bestellungen: [bestellungID1] },
    { _id: produktID5, produktname: "Teapot", beschreibung: "Why do i exist? That is the question", preis: 418, groesse: 10, bestellungen: [bestellungID4] }
]);

db.mitarbeiter.insertMany([
    { _id: mitarbeiterID1, name: "John Doe", mail: "john.doe@example.com", abteilung: "Sales", geschlecht: "Männlich" },
    { _id: mitarbeiterID2, name: "Jane Doe", mail: "jane.doe@example.com", abteilung: "Support", geschlecht: "Weiblich" }
]);

db.kunden.insertOne({
    _id: kundenID1,
    name: "Tim Berners-Lee",
    adresse: "123 Web St",
    bestellungen: [
        {
            _id: bestellungID1,
            datum: new Date("2023-07-09"),
            status: "abgeschlossen",
            gesamtbetrag: 711.95,
            mitarbeiterID: mitarbeiterID1,
            produkte: [produktID1, produktID4]
        },
        {
            _id: bestellungID3,
            datum: new Date("2024-09-12"),
            status: "offen",
            gesamtbetrag: 36.95,
            mitarbeiterID: mitarbeiterID1,
            produkte: [produktID3]
        }
    ]
});

db.kunden.insertOne({
    _id: kundenID2,
    name: "Noah Young",
    adresse: "456 Tech Ave",
    bestellungen: [
        {
            _id: bestellungID2,
            datum: new Date("2024-09-05"),
            status: "offen",
            gesamtbetrag: 249.50,
            mitarbeiterID: mitarbeiterID2,
            produkte: [produktID2]
        }
    ]
});

db.kunden.insertOne({
    _id: kundenID3,
    name: "Grace Hopper",
    adresse: "789 Code Rd",
    bestellungen: [
        {
            _id: bestellungID4,
            datum: new Date("1970-01-01"),
            status: "abgeschlossen",
            gesamtbetrag: 418.0,
            mitarbeiterID: mitarbeiterID2,
            produkte: [produktID5]
        }
    ]
});
