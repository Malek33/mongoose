// step 1

const mongoose = require("mongoose");

// step 2 : connect with mongodb db
// promises : async => 3 steps : pending , fullfilled , rejected
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("database is connected");
    } catch (err) {
        console.log("ERROR", err);
    }
};

module.exports = connectDB;