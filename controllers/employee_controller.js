const express = require('express'),
    router = express.Router()

const service = require('../services/employee_service.js');



router.get('/', async (req, res) => {
    const employees = await service.getAllEmployees()
    // .catch(err=>console.log(err))
    res.send(employees);
})

module.exports = router;