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
    },
    img: [{
        url: String
    }],
    talle: [
        String
    ],
    stock: {
        type: Boolean,
        default: true
    },
    destacado: {
        type: Boolean,
        default: false
    },    
    color: [
        String
    ],   
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String        
    },
    subcategory: {
        type: String
    }

});

ProductSchema.methods.toJSON = function() {
    const { __v, ...data } = this.toObject();
    return data
};

module.exports = model('Product', ProductSchema);
