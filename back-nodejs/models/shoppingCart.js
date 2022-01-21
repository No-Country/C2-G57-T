const { Schema, model } = require("mongoose");

const shoppingCart = Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    listaProducto: {
        type: Array,
        default: []
    }

});

shoppingCart.methods.toJSON = function() {
    const { __v, _id, ...shoppingCart } = this.toObject();
    shoppingCart.uid = _id;
    return shoppingCart
};



module.exports = model('shoppingCart', shoppingCart);