const {Schema, model} = require("mongoose");


const ProfileSchema = Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },   
    name: {
        type: String,
        required: [true, "Name is required"],
         },        
    age: {
        type: Number,
        default: 0
    },    
    address : {
        type: String,
        default: ""
    },    
    pic: {
        type: String
    }

});

module.exports = model('Profile', ProfileSchema);