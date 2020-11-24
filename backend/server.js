const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dataRoutes = express.Router();
const PORT = 4000;

let Data = require('./data.model.js');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/projectData', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

dataRoutes.route('/').get(function(req, res) {
    Data.find(function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            res.json(data)
        }
    });
    
});

dataRoutes.route('/').post(function(req, res){
    let data = new Data(req.body);
    data.save()
        .then(data => {
            res.status(200).json({'data': 'data added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

app.use('/data', dataRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: "+PORT);
});
