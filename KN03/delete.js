db.kunden.deleteOne({ _id: ObjectId("CUSTOMER_ID_TO_DELETE") });
db.kunden.updateMany(
    {},
    { $pull: { bestellungen: { status: "abgeschlossen" } } }
);
db.produkte.deleteMany({ $or: [{ _id: ObjectId("PRODUCT_ID_1") }, { _id: ObjectId("PRODUCT_ID_2") }] });
