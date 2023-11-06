const Note = require('../models/note');
 
module.exports.findAllNotes = (req, res) => {
    Note.find()
        .then((allDaNotes) => {
            res.json(allDaNotes)
        })
        .catch((err) => {
            res.json(err)
        });
}
 
module.exports.findOneSingleNote = (req, res) => {
    Note.findOne({ _id: req.params.id })
        .then(oneSingleNote => {
            res.json(oneSingleNote)
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.createNewNote = (req, res) => {
    Note.create(req.body)
        .then(newlyCreatedNote => {
            res.json(newlyCreatedNote)
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.updateExistingNote = (req, res) => {
    Note.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedNote => {
            res.json(updatedNote)
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.deleteAnExistingNote = (req, res) => {
    Note.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        });}
