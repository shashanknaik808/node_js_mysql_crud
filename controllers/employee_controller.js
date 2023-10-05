const express = require('express'),
    router = express.Router()

const service = require('../services/employee_service.js');



router.get('/', async (req, res) => {
    const employees = await service.getAllEmployees()
    res.send(employees)
});


router.get('/:id', async (req, res) => {

    const employee = await service.getEmployeeById(req.params.id)

    if (employee == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(employee)
});

module.exports = router;