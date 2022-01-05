const express = require('express');
iniciarMongoose = require('./app/mongodb/dbInit');
const app =  express()
const port = 3003;
//habilitar ruta
const userRouters = require('./app/rutas/login');

app.use(userRouters);

//iniciar bdd mongoose.
iniciarMongoose()

app.listen(port,( )=>{
    console.log('la aplicacion esta en linea');
})
