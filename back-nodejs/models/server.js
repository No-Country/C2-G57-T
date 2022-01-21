require("dotenv").config();
const express = require("express");
const cors = require("cors");
const iniciarMongoose = require('../mongo/dbInit');
const fileUpload = require("express-fileupload");

class Server {

    constructor() {
        this.port = process.env.PORT || 5000;
        this.app = express();
        this.paths = {
                users: "/api/users",
                auth: "/api/auth",
                color: "/api/color",
                products: "/api/products",
                shoppingCart: "/api/shoppingCart",
                uploads: "/api/uploads"
            }
            // Conectar DB
        iniciarMongoose()
            // Middlewares
        this.middlewares();
        // Rutas
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // Lectura y parseo de body
        this.app.use(express.json());
        // Subida de archivos con fileupload
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));
    }

    routes() {
        this.app.use(this.paths.users, require("../routes/users"));
        this.app.use(this.paths.auth, require("../routes/auth"));
        this.app.use(this.paths.shoppingCart, require("../routes/shoppingCart"));
        this.app.use(this.paths.products, require("../routes/product"));
        this.app.use(this.paths.uploads, require("../routes/uploads"));
        this.app.use(this.paths.color, require("../routes/color"));
    }


    serverStart() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port `, this.port)
        })
    }

}

module.exports = Server;