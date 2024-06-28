const mongoose = require ('mongoose')
const urlBD = 'mongodb://localhost:27017/JessicaLover'

mongoose.connect(urlBD)
.then(() => {
    console.log('Si jaló la conexión yippie')
})
.catch((err) => {
    console.log('No jaló tilin')
})
//Esquema de la base de datos
const esquemaAlumno = new mongoose.Schema({
    name:{type: String},
    apePat:{type: String},
    numTel:{type: Number}
})
//Creando Tabla
const modeloAlumno = new mongoose.model("Tabla de datos", esquemaAlumno)
modeloAlumno.create({
    name: "Jesus",
    apePat: "Salazar",
    numTel: 4491234567
})