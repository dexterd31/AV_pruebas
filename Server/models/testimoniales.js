const Sequelize = require ('sequelize')
const db = require ('../config/database')
const testimoniales = db.define('testimoniales',{
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})
module.exports = testimoniales;