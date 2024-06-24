db.bestellungen.aggregate([
    {
        $lookup: {
            from: "kunden",
            localField: "_id",
            foreignField: "bestellungen",
            as: "kunden_details"
        }
    },
    { $unwind: "$kunden_details" },
    { $project: { _id: 1, datum: 1, status: 1, gesamtbetrag: 1, "kunden_details.name": 1, "kunden_details.adresse": 1 } }
]);

db.bestellungen.aggregate([
    {
        $lookup: {
            from: "produkte",
            localField: "produktID",
            foreignField: "_id",
            as: "produkt_details"
        }
    },
    { $unwind: "$produkt_details" },
    { $match: { "produkt_details.preis": { $gte: 100 } } },
    { $group: { _id: "$status", totalBetrag: { $sum: "$gesamtbetrag" }, anzahlBestellungen: { $sum: 1 } } }
]);
