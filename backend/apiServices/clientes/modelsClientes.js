const pool = require('../../services/mysqlDb/poolDb');

const getClientes = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM cliente', (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};


const createCliente = (cliente) => {
    const { primerNombre, segundoNombre, primerApellido,segundoApellido,edad, direccion,ciudad,pais, telefono, email} = cliente;
    return new Promise((resolve, reject) => {
        pool.query(
            'INSERT INTO cliente (primerNombre, segundoNombre, primerApellido,segundoApellido,edad, direccion,ciudad,pais, telefono, email) VALUES (?, ?, ?, ?,?, ?, ?, ?,?,?)',
            [primerNombre, segundoNombre, primerApellido,segundoApellido,edad, direccion,ciudad,pais, telefono, email],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        );
    });
};

const updateCliente = (id, cliente) => {
    const {
        primerNombre, segundoNombre, primerApellido, segundoApellido,
        edad, direccion, ciudad, pais, telefono, email
    } = cliente;

    const query = `
        UPDATE cliente 
        SET primerNombre = ?, segundoNombre = ?, primerApellido = ?, 
            segundoApellido = ?, edad = ?, direccion = ?, ciudad = ?, 
            pais = ?, telefono = ?, email = ?
        WHERE id = ?
    `;

    return new Promise((resolve, reject) => {
        pool.query(
            query,
            [
                primerNombre, segundoNombre, primerApellido, segundoApellido,
                edad, direccion, ciudad, pais, telefono, email, id
            ],
            (err, result) => {
                if (err) {
                    console.error('Error en la actualización:', err);
                    return reject(err); // Rechaza con el error
                }
                if (!result) {
                    return reject(new Error('No se obtuvo respuesta del servidor'));
                }
                if (result.affectedRows === 0) {
                    return reject(new Error('Cliente no encontrado'));
                }
                resolve(result);
            }
        );
    });
};



const deleteCliente =  (id) => {
    const query = 'DELETE FROM cliente WHERE id = ?';
    return new Promise((resolve, reject) => {
        pool.query(query, [id], (err, result) => {
            if (err) reject(err);
            if (result.affectedRows === 0) {
                return reject(new Error('Cliente no encontrado'));
            }
            resolve({ message: 'Cliente eliminado correctamente' });
        });
    });
};

const getCliente =(email) => {
    const query = 'SELECT * FROM cliente WHERE email = ?';
    return new Promise((resolve, reject) => {
        pool.query(query, [email], (err, results) => {
            if (err) reject(err);
            if (results.length === 0) {
                return reject(new Error('Cliente no encontrado'));
            }
            resolve(results[0]);
        });
    });};


module.exports = { getClientes, getCliente, createCliente,updateCliente,deleteCliente };