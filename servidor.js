//console.log("Prueba")


const express = require('express');
const mongoose = require('mongoose');
const InscripcionSchema = require("./modelos/Inscripcion.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Conexion a base de datos
mongoose.connect("mongodb+srv://progweb_mt:Pruebaproweb22@clusterprogramaweb.fsypk.mongodb.net/RetiNodeJSyMongoDB?retryWrites=true&w=majority");

//Operaciones CRUD
router.get('/',(req, res) =>{
    res.send("Inicio new API")
});

router.get('/inscripcion', (req, res) =>{
    InscripcionSchema.find(function(err, datos){
        if(err){
            console.log("Error encontrando datos");
        }else{
            res.send(datos);
        }
    })
});

router.post('/inscripcion',(req, res) =>{
    let nuevaInscripcion = new InscripcionSchema({

        idInscripcion: req.body.id,
        Tipodocumento: req.body.tipodoc,
        Documentoidentificacion: req.body.docident,
        Nombres: req.body.nombre,
        Apellidos: req.body.apellido,
        Direccion: req.body.dir,
        Email: req.body.correo,
        Telfijo: req.body.fijo,
        Telcel: req.body.cel,
        EnlaceSitioweb: req.body.web,
        Descripcionperfil: req.body.desper
    });
    nuevaInscripcion.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Inscripcion guardada")
    })
});

app.use(router);
app.listen(3000, () => {
    console.log("Servidor en el puerto 3000")
});