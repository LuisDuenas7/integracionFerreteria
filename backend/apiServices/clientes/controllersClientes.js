const clienteModel = require ('../clientes/modelsClientes')

const getClientes = async (req,res) =>{
 try {
    const clientes = await clienteModel.getClientes();
    res.json(clientes);
    
 } catch (error) {
    console.error('Error al obtener los clientes: ',error);
    res.status(500).json({error: error.message})
 }

}

const getCliente = async (req, res) => {
    const { email } = req.params; 
    try {
        const cliente = await clienteModel.getCliente(email);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        console.error('Error al obtener cliente por email:', error);
        res.status(500).json({ error: error.message });
    }
};

const createCliente = async (req, res) => {
    try {
        await clienteModel.createCliente(req.body);
        res.status(201).json({ message: 'Cliente agregado correctamente' });
    } catch (error) {
        console.error('Error al agregar cliente:', error);
        res.status(500).json({ error: error.message });
    }
};

const updateCliente = async (req, res) => {
    const { id } = req.params;
    try {
        await clienteModel.updateCliente(id, req.body);
        res.json({ message: 'Cliente actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar cliente:', error);
        res.status(500).json({ error: error.message });
    }
};

const deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        await clienteModel.deleteCliente(id);
        res.json({ message: 'Cliente eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar cliente:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCliente,getClientes,updateCliente,deleteCliente,createCliente
};