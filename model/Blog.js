const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})


const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;