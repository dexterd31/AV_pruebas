const Sequelize = require ('sequelize')
const db = require ('../config/database')
const viajes = db.define('viajes',{
    TITULO: {
        type: Sequelize.STRING
    },
    PRECIO: {
        type: Sequelize.STRING
    },
    FECHA_IDA: {
        type: Sequelize.DATE
    },
    FECHA_REGRESO: {
        type: Sequelize.DATE
    },
    IMAGEN: {
        type: Sequelize.STRING
    },
    DESCRIPCION: {
        type: Sequelize.STRING
    },
    DISPONIBLES: {
        type: Sequelize.STRING
    }
})
module.exports = viajes;