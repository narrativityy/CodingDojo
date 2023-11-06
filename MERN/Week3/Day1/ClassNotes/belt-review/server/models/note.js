const mongoose = require('mongoose');
 
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [3, "{PATH} must be at least 3 chars {VALUE}"]
    },
    content: {
        type: String
    },
    isImportant: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});
 
const Note = mongoose.model('Note', NoteSchema);
 
module.exports = Note;
