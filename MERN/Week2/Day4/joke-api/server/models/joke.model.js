const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Must include a setup"],
        minLength: [1, "Must be at least 1 char"]
    },
    punchline: {
        type: String,
        required: [true, "Must include a punchline"],
        minLength: [1, "Must be at least 1 char"]
    }
});
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
