
const { Router } = require("express");
const { payment } = require("../controllers/payment");


const router = Router();


router.post("/create-checkout-session", payment);





module.exports = router; 
