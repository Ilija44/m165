db.kunden.find();
db.produkte.find({ $or: [{ preis: { $gte: 100 } }, { beschreibung: { $exists: true } }] });
db.bestellungen.find({ datum: { $gte: ISODate('2023-06-01'), $lt: ISODate('2024-12-01') } });
db.kunden.find({ $and: [{ name: { $exists: true } }, { adresse: { $regex: /Tech/ } }] });
db.produkte.find({}, { produktname: 1 });
db.produkte.find({}, { _id: 0, produktname: 1, preis: 1 });
