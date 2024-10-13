const modelsProductos= require('./modelsProductos')

const getProductos = async (req,res)=> {
    try {
        const productos= await modelsProductos.getProductos();
        res.json(productos)
    } catch (error) {
        console.error('Error al obtener los Productos: ',error);
    res.status(500).json({error: error.message})
    }
}

module.exports = {getProductos}