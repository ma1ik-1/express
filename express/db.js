const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/cats", {useNewUrlParser : true}).then(() => console.log("yay")).catch(() => console.log("boo"));

const catSchema = new mongoose.Schema({
    name: {type: String, required: true},
    colour: String,
    evil: Boolean
});

const catModel = mongoose.model("cat", catSchema);

module.exports = {catModel}