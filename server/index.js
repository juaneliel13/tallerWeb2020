const express = require('express');
const morgan = require('morgan')
const app = express();

const {mongoose}=require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/department',require('./routes/department.routes'))

//Routes
app.listen(3000,()=>
{
    console.log('Server on port', app.get('port'));
});



