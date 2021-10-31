const mongoose = require('mongoose');

let InscripcionSchema = new mongoose.Schema({
    idInscripcion: Number,
    Tipodocumento: String,
    Documentoidentificacion: Number,
    Nombres: String,
    Apellidos: String,
    Direccion: String,
    Email: String,
    Telfijo: Number,
    Telcel: Number,
    EnlaceSitioweb: String,
    Descripcionperfil: String
});

module.exports = mongoose.model('inscripcion',InscripcionSchema,'Inscripciones');