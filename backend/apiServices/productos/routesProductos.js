const express = require('express');

const{
    getProducto,
    getProductos,
    updateProducto,
    deleteProducto,
    createProducto
} = require('./controllersProductos');

const router = express.Router();

router.get('/', getProductos);
//router.get('/:id', getProducto);
//router.post('/',createProducto);
//router.put('/:id', updateProducto);
//router.delete('/:id', deleteProducto);

module.exports = router;