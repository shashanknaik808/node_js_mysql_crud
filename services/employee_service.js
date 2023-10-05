const db = require('../db.js');

module.exports.getAllEmployees = async (req, res) => {

    const [rows] = await db.query("SELECT * FROM employees")
        .catch(err => console.log(err))
    return rows;
};


module.exports.getEmployeeById = async (id) => {

    const [[record]] = await db.query("SELECT * FROM employees WHERE id = ?", [id])
    return record;
};


module.exports.deleteEmployee = async (id) => {

    const [{ affectedRows }] = await db.query("DELETE FROM employees WHERE id = ?", [id])
    return affectedRows;
};


module.exports.addOrEditEmployee = async (obj, id = 0) => {

    const [[[{affectedRows}]]] = await db.query("CALL usp_employee_add_or_edit(?,?,?,?)",
        [id, obj.name, obj.employee_code, obj.salary])
    return affectedRows;
};