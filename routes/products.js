const express = require("express");
const product_Act = require("../controllers/products");
const router = express.Router();

router.get('/', product_Act.getProducts);
router.get('/:roll', product_Act.getSpecProduct);
router.post('/', product_Act.createProduct);
router.patch('/:roll', product_Act.updateProduct);
router.delete('/:roll', product_Act.deleteProduct);

module.exports = router;



