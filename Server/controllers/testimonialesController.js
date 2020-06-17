const testimoniales = require ('../models/testimoniales')
exports.testimonialesViews = (req,res) => {
    testimoniales.findAll()
     .then(testimoniales => res.render('testimoniales',{
             pagina: 'testimoniales',
             testimoniales
         })
     )
 }
 exports.testimonialesAdd = (req,res) => {
    let { nombre, correo, mensaje } = req.body
    let errores = []
    if(!nombre) {
        errores.push({'mensajes':'Agrega tu nombre'})
    }
    if(!correo) {
        errores.push({'mensajes':'Agrega tu correo'})
    }
    if(!mensaje) {
        errores.push({'mensajes':'Agrega tu mensaje'})
    }
    if(errores.length > 0){
        res.render('testimoniales',{
            errores,
            nombre,
            correo,
            mensaje
        })
    }else {
        testimoniales.create({
            nombre,
            correo,
            mensaje
        })
        .then(() => {
            res.redirect('/testimoniales')
        })
        .catch(error => console.log(error))
    }
}