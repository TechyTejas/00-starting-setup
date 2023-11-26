const path = require('path');

const express = require('express');

const router = express.Router();

const productscontroller = require('../controllers/products')

router.get('/',productscontroller.getProducts);

module.exports = router;
