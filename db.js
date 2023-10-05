const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'employee_db'
}
)

module.exports = mysqlPool;

mysqlPool.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        // app.listen(3000,
        //     () => console.log('server started at 3000'))
    })
    .catch(err => console.log('db connection failed. \n' + err))