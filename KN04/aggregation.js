db.kunden.aggregate([
    { $match: { name: { $exists: true } } },
    { $match: { adresse: { $regex: /Tech/ } } }
]);

db.produkte.aggregate([
    { $match: { preis: { $gte: 100 } } },
    { $project: { produktname: 1, preis: 1, _id: 0 } },
    { $sort: { preis: 1 } }
]);

db.bestellungen.aggregate([
    { $match: { status: "abgeschlossen" } },
    { $group: { _id: "$status", totalBetrag: { $sum: "$gesamtbetrag" } } }
]);

db.produkte.aggregate([
    { $group: { _id: "$groesse", totalProdukte: { $sum: 1 }, durchschnittPreis: { $avg: "$preis" } } }
]);
