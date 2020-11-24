const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Data = new Schema({
    First_Name: {
        type: String
    },
    Last_Name: {
        type: String
    },
    Mail: {
        type: String
    },
    Phone: {
        type: String
    },
    Message: {
        type: String
    },
});

module.exports = mongoose.model('Data', Data);