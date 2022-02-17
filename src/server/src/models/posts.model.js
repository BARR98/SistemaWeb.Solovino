const mongoose = require('mongoose');

const { Schema } = mongoose;
const PostSchema = new Schema({
    nombre_dueño: String,
    nombre_mascota: String,
    descripcion_mascota: String,
    edad_mascota: String,
    imagen_mascota: String,
    sexo_mascota: String,
    talla_mascota: String,
    raza_mascota: String,
    fecha_desaparicion: String,
    lugar_desaparicion: String,
    telefono: String
});

module.exports = mongoose.model('Post', PostSchema);