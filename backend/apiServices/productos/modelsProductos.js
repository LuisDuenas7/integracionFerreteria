const pool = require('../../services/mysqlDb/poolDb');

const getProductos = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM producto', (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};


module.exports ={ getProductos};