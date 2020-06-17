//requerimos el modelo de viajes
const viaje = require('../models/viajes')
exports.viajesController = async (req,res) => {
    const viajes =viaje.findAll()
        .then((viajes) => {
            res.render('viajes',{
                pagina: 'Proximos Viajes',
                viajes
            })
        })
        .catch((error) => console.log(error)) 
}
exports.mostrarViajes = (req,res) => {
    viaje.findByPk(req.params.id)
        .then(viaje => res.render('viaje',{
             viaje
             }))
        .catch(error => console.log(`error: ${error}`))
}