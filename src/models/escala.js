const mongoose = require('mongoose');


const Evento = mongoose.model('Evento',{
    evento_id: {
        type: mongoose.Types.ObjectId,
        ref: 'usuario',
    },
    participantes_id:[{
        type: mongoose.Types.ObjectId,
        ref: 'usuario',
    }],
    horario: {
        inicio: Number,
        final: Number,
    },
    situation : Boolean
});

module.exports = Evento;