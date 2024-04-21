const productdata = require("../model/productdata");

// Querying all product data:
const getProducts = async (req, res) => {
    try {
        const products = await productdata.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Querying a specific product:
const getSpecProduct = async (req, res) => {
    const roll = req.params.roll;
    try {
        const products = await productdata.findOne({ roll: roll});
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

// Update a Product Record
const updateProduct = async (req, res) => {
    const roll = req.params.roll;
    try {
        const updatedProduct = await productdata.findOneAndUpdate({ roll: roll}, req.body, {new: true});
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
}

// Delete a Product Record
const deleteProduct = async (req, res) => {
    const roll = req.params.roll;
    try {
        await productdata.findOneAndDelete({ roll: roll });
        res.status(204).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
}

// Create a Product Record
const createProduct = async (req, res) => {
    try {
        // get product data from request
        const { name, roll, registration, subjects, registered_on} = req.body;

        // create new product
        const newProduct = new productdata({
            name: name,
            roll: roll,
            registration: registration,
            subjects: subjects,
            registered_on: registered_on
        });

        // store the product to the database
        const createProduct = await newProduct.save();

        // return the new created product data
        res.status(201).json(createProduct);
    } catch (error) {
        // handle error cases
        res.status(400).json({ message: error.message});
    }
}


module.exports = {getProducts, getSpecProduct, updateProduct, deleteProduct, createProduct};


