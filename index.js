const express = require('express'),
    app = express();

require('express-async-errors');

const db = require('./db.js'),
    employeeRoutes = require('./controllers/employee_controller.js');

app.use(express.json());

app.use('/api/employees', employeeRoutes);

app.use((err, req, res, next) => {
    console.log(err);

    res.status(err.status ||
        500).send('Something went wrong!');
});

db.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(3000,
            () => console.log('server started at 3000'))
    })
    .catch(err => console.log('db connection failed. \n' + err))