//requerimos el modelo de viajes
const viaje = require('../models/viajes')
// requerimos el modelo de testimoniales
const testimoniales = require ('../models/testimoniales')

exports.homeController = (req,res) => {

    const promises = []
    promises.push(viaje.findAll({limit : 3}))
    promises.push(testimoniales.findAll({limit : 3}))

    const resultado = Promise.all(promises)

    
    resultado.then(resultado => res.render('index',{
            pagina: 'Proximos Viajes',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        }))
}