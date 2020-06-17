const express = require ('express')
const router = express.Router()
// controllers
const nosotrosController = require ('../controllers/nosotrosController')
const homeController = require ('../controllers/homeController')
const viajesController = require ('../controllers/viajesController')
const testimonialesController = require ('../controllers/testimonialesController')

//para exportar nuestras rutas lo hacemos con el siguiente comando
module.exports = function () {
    router.get('/', homeController.homeController   );

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes',viajesController.viajesController);

    router.get('/viajes/:id',viajesController.mostrarViajes);

    router.get('/testimoniales', testimonialesController.testimonialesViews);

    router.post('/testimoniales', testimonialesController.testimonialesAdd);

    return router
} 