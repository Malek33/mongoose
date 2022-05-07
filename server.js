const express = require("express");

const app = express();
require("dotenv").config();
const connectDB = require("./config/ConnectDB");
// require model
const User = require("./models/User");
connectDB();

User.create(
    [
        { name: "John", favoriteFoods: ["Pasta", "Fruits", "Pizza"], age: 14 },
        { name: "Mohsen", favoriteFoods: ["Pasta", "Burger"], age: 19 },
        { name: "Mohsen", favoriteFoods: ["Meat", "Rice", "Chicken", "Chinese"], age: 49 },
    ],
    (err, data) => {
        err ? console.log("ERROR", err) : console.log("data", data);
    }
);

// model.find()
User.find({ 'name': 'Mohsen' }, (err, data) => {
    err ? console.log("ERROR", err) : console.log("data", data);
});

// model.findOne()
User.findOne({ 'favoriteFoods': 'Fruits' }, (err, data) => {
    err ? console.log("ERROR", err) : console.log("data", data);
});

// model.findById()
const id = "627639e6afd956cb893f62ca"
User.findById(id, (err, data) => {
    err ? console.log("ERROR", err) : console.log("data", data);
});

User.findByIdAndRemove(id, (err, data) => {
    err ? console.log("ERROR", err) : console.log("data", data);
});

const port = 5000;

app.listen(port, (err) =>
    err ?
    console.log("ERROOOOR!!!", err) :
    console.log(`this server is running on port : ${port}`)
);