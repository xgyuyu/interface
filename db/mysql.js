var mysql = require('mysql');

const pool = mysql.createPool({
    host: '118.31.3.170',
    user: 'his',
    password: 'His@9700',
    database: 'pcs9700',
    port: 5506
});

let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = query