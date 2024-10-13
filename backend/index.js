const express = require('express');
const cors = require ('cors');
const routesCLientes= require('./apiServices/clientes/routesClientes');
const routesProductos = require('./apiServices/productos/routesProductos');



const app = express();
const port = 3001;

//middle cors Json
app.use(cors());
app.use(express.json());

//Endpoints
app.get('/', (req,res) =>{
   return res.send('Bienvenido al API Ferreteria el servidor esta funcionando!')
});

app.use('/api/clientes',routesCLientes);
app.use('/api/productos', routesProductos);




//Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor en ejecucion en http://localhost:${port}`);
});
