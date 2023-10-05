const express = require('express'),
    router = express.Router()

const db = require('../db.js');

router.get('/', async (req, res) => {
    const [rows] = await db.query("SELECT * FROM employees")
        .catch(err => console.log(err))
    res.send(rows);

})

module.exports = router;