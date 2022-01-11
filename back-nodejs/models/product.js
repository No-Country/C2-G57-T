
const {Schema, model} = require("mongoose");

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true
    },        
    price: {
        type: Number,
        default: 0
    },    
    description : {
        type: String,
        default: "No description"
    },    
<<<<<<< HEAD
    img: {
        type: Array
    }
=======
    img: [{
        url: String
    }]
>>>>>>> d9e454ac4bb218ceadf85f852cc75890ddccfd76
});

ProductSchema.methods.toJSON = function(){
    const { __v, ...data } = this.toObject();    
    return data
};

module.exports = model('Product', ProductSchema);

