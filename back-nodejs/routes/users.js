
const { Router } = require("express");
const { postUser, deleteUser } = require("../controllers/users");

const router = Router();




router.post("/", postUser);


router.delete("/:id", deleteUser);



module.exports = router; 

