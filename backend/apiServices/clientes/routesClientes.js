const express = require('express');

const{
    getCliente,
    getClientes,
    updateCliente,
    deleteCliente,
    createCliente
} = require('./controllersClientes');

const router = express.Router();

router.get('/', getClientes);
router.get('/:email', getCliente);
router.post('/',createCliente);
router.put('/:id', updateCliente);
router.delete('/:id', deleteCliente);

module.exports = router;