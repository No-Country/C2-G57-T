const express = require('express');
const controller =require('../controles/user');
const router = express.Router();
//nombre de la ruta
const path = 'login'

router.get(`/${path}`, controller.getData)

module.exports = router;