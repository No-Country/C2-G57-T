
const Profile = require("../models/profile");
const { generarJWT } = require("../helpers/generar-jwt");



const updateUserProfile = AsyncHandler(async (req, res)=>{

    console.log(req.body)


const user = await Profile.findById(req.name._id);
if(user){
    
    user.email = req.body.email || user.email;
    user.name = req.body.name || user.name;
    user.age = req.body.age || user.age;
    user.address = req.body.address
    user.pic = req.body.pic || user.pic


if(req.body.password){
    user.password=req.body.password;
}

const updateUser = await Profile.save();
res.json({
    _id:updateUser._id,
    email:updateUser.email,
    name:updateUser.name,
    age:updateUser.age,
    address:updateUser.address,
    pic:updateUser._id,
    token:generarJWT(updateUser._id)
  
})
}
else{
    res.status(404)
    throw new Error("user not found")

};

}) 

module.exports = {
    updateUser, 
    updateUserProfile
}