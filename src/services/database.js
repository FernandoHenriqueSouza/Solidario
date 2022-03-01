const mongoose = require('mongoose');

//const routes = require('../routes/usuario.routes');


mongoose.connect('mongodb://localhost:27017/motoclube',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});