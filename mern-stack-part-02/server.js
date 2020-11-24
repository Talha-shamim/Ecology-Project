const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require("multer");
const blogRoutes = express.Router();
const PORT = 5000;
const path = require('path');
let Blog = require('./blog.model');
const File = mongoose.model('Blog');



app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/blogs', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})





blogRoutes.route('/').get(function(req, res) {
    Blog.find(function(err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.json(blogs);
        }
    });
});




blogRoutes.route('/create-blog').post(function(req, res ,next) {
    let blog = new Blog(req.body);
    
    

    blog.save()
        .then(blog => {
            res.status(200).json({'blog': 'blog added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new blog failed');
        });
});


app.use('/blogs', blogRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});