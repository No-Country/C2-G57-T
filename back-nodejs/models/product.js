const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: false
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: "No description"
<<<<<<< HEAD
    },    
    img: {
        type: Array
    }
=======
    },
    img: [{
        url: String
    }],
    talle: {
        type: String,
        default: "No talle"
    },
    stock: {
        type: Boolean,
        default: false
    },
    destacado: {
        type: Boolean,
        default: false
    },
    cantidadIngreso: {
        type: Number,
        default: 0
    },
    cantidadRestante: {
        type: Number,
        default: 0
    },
    color: {
        type: String,

    },
    //color: { type: Schema.Types.ObjectId, ref: 'color' },


>>>>>>> d837e5eece012d75b8ffec20fd56bd9121e6db5a
});

ProductSchema.methods.toJSON = function() {
    const { __v, ...data } = this.toObject();
    return data
};

module.exports = model('Product', ProductSchema);
