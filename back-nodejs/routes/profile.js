const { Router } = require("express");
const {  updateUser,  updateUserProfile } = require("../controllers/profile");

const router = Router();


router.post("/:id", updateUser);
router.get("/:id", updateUserProfile)





module.exports = router; 