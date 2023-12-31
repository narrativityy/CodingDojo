// the controller does the CRUD for the DB
// import the model here
const Product = require("../models/product.model");

// READ ALL
module.exports.findAllProducts = (req, res) => {
    Product.find() //[]
        .then((allDaProducts) => {
            console.log(">>> Product.find() >>>", allDaProducts);
            res.json(allDaProducts);
        })
        .catch((err) => {
            res.json(err);
        });
};

// READ ONE
module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json(oneSingleProduct);
        })
        .catch((err) => {
            res.json(err);
        });
};

// CREATE
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json(newlyCreatedProduct);
        })
        .catch((err) => {
            res.json(err);
        });
};

// UPDATE
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedProduct => {
            res.json(updatedProduct);
        })
        .catch((err) => {
            res.json(err);
        });
};

// DELETE
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
};