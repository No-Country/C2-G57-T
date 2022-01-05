
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const iniciarMongoose = require('../mongo/dbInit');
class Server {

    constructor(){
        this.port = process.env.PORT || 5000;
        this.app = express();
        this.paths = {
            users: "/api/users"
        }
        // Conectar DB
        iniciarMongoose()
        // Middlewares
        this.middlewares();
        // Rutas
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use(cors());
        
        // Lectura y parseo de body
        this.app.use(express.json());        
    }

    routes(){
        this.app.use(this.paths.users, require("../routes/users"));
    }


    serverStart(){
        this.app.listen(this.port, ()=>{
            console.log(`Server listening on port `, this.port)
        })
    }
    
}

module.exports = Server;
