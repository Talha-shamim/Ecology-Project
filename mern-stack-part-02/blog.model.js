const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Blog = new Schema({
    blog_time: {
        type: String
    },
    blog_title: {
        type: String
    },
    blog_author: {
        type: String
    },
    blog_desig: {
        type: String
    },
    blog_des1: {
        type: String
    },
    blog_des2: {
        type: String
    },

    
});

module.exports = mongoose.model('Blog', Blog);