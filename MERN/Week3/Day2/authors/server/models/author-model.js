const mongoose = require('mongoose');
 
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, "name must be at lease 2 chars"]
    },
}, {timestamps: true});
 
const Author = mongoose.model('Author', AuthorSchema);
 
module.exports = Author;