const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const {mongoose}=require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}))

//Routes
app.use('/api/department/',require('./routes/department.routes'))


app.listen(3000,()=>
{
    console.log('Server on port', app.get('port'));
});



