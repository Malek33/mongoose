const mongoose = require("mongoose");
// const Schema = mongoose.Schema
// destructuring
const { Schema, model } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
    favoriteFoods: {
        type: Array,
    },
});

module.exports = User = model("User", userSchema);