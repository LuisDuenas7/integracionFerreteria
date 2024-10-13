const mysql = require('mysql');

const poolDb = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Service07',
    database: 'ferreteria'
});

poolDb.getConnection((err, connection) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');

    connection.release();
});

module.exports = poolDb;