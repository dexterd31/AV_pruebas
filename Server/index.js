//importar express
const express = require ('express');
//importamos las rutas
const routes = require ('./routes')
// importamos bodyparser
const bodyParser = require('body-parser')
//importamos el path para ingresar a fileSystem
const path = require ('path')
//cargamos config
const configs = require ('./config')
// //importar database
// const db = require ('./config/database')
require ('dotenv').config({path: 'variables.env'})
// //comprobar conexion
// db.authenticate()
//     .then(()=> console.log('DB conectada'))
//     .catch(error => console.log(error))
//configurar express
const app = express();

//añadir las vistas
app.set('views', path.join(__dirname , './views'))

//hsbilitar pug
app.set('view engine', 'pug')

//añadir la carpeta estatica
app.use(express.static('Public'))
//validar ambiente
const config = configs[app.get('env')]
//creamos la variable del sitio
app.locals.titulo = config.nombresitio
//mostrar el año actual
app.use((req,res,next) => {
    const fecha = new Date()
    res.locals.fechaActual = fecha.getFullYear()
    res.locals.ruta = req.path
    return next()
})
//ejecutamos bodyparser
app.use(bodyParser.urlencoded({extended: true}))
//parametros de use
//le decimos que en la pagina principal '/' le pasamos un request "req" y un response "res" y luego con un arrow-function le pasamos la respuesta con un medoto send y enviamos a la pagina un hola mundo
// app.use('/', (req, res) => {
//     res.send('hola mundo en NodeJS');
// });
//cargar las rutas
app.use('/', routes())

//configurar el listen para el puerto del localhost 

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.listen(port, host, () => {
    console.log('el servidor esta funcionando')
})