const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./src/services/database');
const cors  = require('cors');

const usuarioRoutes = require('./src/routes/usuario.routes');
const loginRoutes = require('./src/routes/login.routes');
const eventoRoutes = require('./src/routes/evento.routes');


app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/', usuarioRoutes); 
app.use('/login', loginRoutes); 
app.use('/evento', eventoRoutes); 



app.listen(3000,()=>{
    console.log('Meu servidor está funcionando');
})