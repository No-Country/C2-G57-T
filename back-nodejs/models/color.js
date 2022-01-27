const { Schema, model } = require("mongoose");

const colorSchema = new Schema({

    name: {
        type: String,
        required: [true, "Este campo es obligatorio"]
    },
})

// Esto quita de las respuestas al cliente la password y version
// El_id es cambiado para que se muestre visualmente como uid
colorSchema.methods.toJSON = function() {
    const { __v, _id, ...color } = this.toObject();
    color.uid = _id;
    return color
};

module.exports = model("Color", colorSchema);