import mongoose from "mongoose";

mongoose.connect("mongodb+srv://andre:123@banco.kuhq9ht.mongodb.net/node");

mongoose.set("strictQuery", true);
let db = mongoose.connection;

export default db;