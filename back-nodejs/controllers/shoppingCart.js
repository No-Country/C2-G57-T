const ShoppingCart = require("../models/shoppingCart");

const saveshoppingCart = async(req, res) => {

    const { user, listaProducto = [] } = req.body;
    const info = { user, listaProducto }
    try {
        const shoppingCartSave = await ShoppingCart.create(info);
        await shoppingCartSave.save();
        res.status(201).json(shoppingCartSave);
    } catch (error) {
        res.json({
            msg: error
        });
    }
};

const listSaveshoppingCart = async(req, res) => {

    try {

        const shoppingCartList = await ShoppingCart.find();
        res.status(201).json(shoppingCartList);
    } catch (error) {
        res.json({
            msg: error
        });
    }

}
const listByUserSaveshoppingCart = async(req, res) => {
    let idUser = req.query.id;
    console.log("aca no: ", req.query.id);
    try {
        //const product = await Product.find({ user: price });
        const shoppingCart = await ShoppingCart.find({ user: idUser });
        console.log(shoppingCart);
        // if (!shoppingCart) {
        //     return res.status(400).json({ msg: `No existe Carrito con este con el id: ${idUser}` });
        // }
        res.status(200).json(shoppingCart)

    } catch (error) {
        res.status(400).json({
            msg: "Error en el servidor"
        });
    }



}
const addProduc = async(req, res) => {
        const { id } = req.params;
        let shoppingCartUpdate = req.body;
        console.log("aca2;", shoppingCartUpdate);
        try {
            await ShoppingCart.findByIdAndUpdate(id, shoppingCartUpdate, { new: true });
            const shoppingCart = await ShoppingCart.findById(id);
            console.log(shoppingCart);
            res.status(200).json(shoppingCart)
        } catch (error) {
            res.status(400).json({
                msg: "Error en el servidor"
            });
        }

    }
    //recibir id de carrito y un producto a eliminar(id asociado)
const deleteProduc = async(req, res) => {
    const { id } = req.params; //u  elemnto del la lista de producto
    let shoppingCartUpdate = req.body;
    console.log("body que entra: ", shoppingCartUpdate.producto);

    const shoppingCart = await ShoppingCart.findById(id);
    // console.log("carrito traido", shoppingCart);
    console.log("lista 1: ", shoppingCart.listaProducto);

    function removeItemFromArr(arr, item) {
        var i = arr.indexOf(item);
        console.log(item);
        console.log(i);
        if (i !== -1) {
            arr.splice(i, 1);
        }
    }
    console.log("carro a guardar: ", shoppingCart);
    removeItemFromArr(shoppingCart.listaProducto, shoppingCartUpdate.producto);
    console.log("lista 2: ", shoppingCart.listaProducto);


    try {
        await ShoppingCart.findByIdAndUpdate(id, shoppingCart);
        const shoppingCart2 = await ShoppingCart.findById(id);
        console.log("carro actuaclicarod : ", shoppingCart2);
        res.status(200).json(shoppingCart2)
    } catch (error) {
        res.status(400).json({
            msg: "Error en el servidor"
        });
    }

}
const deleteProducAll = async(req, res) => {
    let idUser = req.query.id;
    try {

        const shoppingCart = await ShoppingCart.find({ user: idUser });
        console.log("primero: ", shoppingCart);
        const idCarrito = shoppingCart[0]._id.toString();
        console.log("id de carrito: ", idCarrito);
        //limpia array
        shoppingCart[0].listaProducto = [];
        //shoppingCart[0].listaProducto.splice(0, shoppingCart[0].listaProducto.length);

        console.log("segundo ", shoppingCart);

        const shoppingCart3 = await ShoppingCart.findByIdAndUpdate(idCarrito, shoppingCart[0], { new: true });
        const shoppingCart2 = await ShoppingCart.findById(idCarrito);
        console.log("carro actuaclicaro : ", shoppingCart3);
        res.status(200).json(shoppingCart3)

    } catch (error) {
        res.status(400).json({
            msg: "Error en el servidor"
        });
    }


}
module.exports = {
    saveshoppingCart,
    listSaveshoppingCart,
    listByUserSaveshoppingCart,
    addProduc,
    deleteProduc,
    deleteProducAll
}