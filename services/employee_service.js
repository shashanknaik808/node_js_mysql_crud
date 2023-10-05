const db = require('../db.js');

module.exports.getAllEmployees = async (req, res) => {
    
    const [rows] = await db.query("SELECP * FROM employees")
        .catch(err => console.log(err))
    return rows;
}