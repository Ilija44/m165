db.bestellungen.find(
    {},
    { _id: 0, "kunden_details.name": 1, "kunden_details.adresse": 1 }
);

db.bestellungen.find(
    { "kunden_details.adresse": { $regex: /Tech/ } },
    { _id: 0, "kunden_details.name": 1, "kunden_details.adresse": 1 }
);

db.bestellungen.aggregate([
    { $unwind: "$kunden_details" },
    { $project: { _id: 0, "kunden_details.name": 1, "kunden_details.adresse": 1 } }
]);
