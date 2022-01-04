

const postUser = async(req, res)=>{

    const {name, email, password} = req.body;

    res.json({
        name,
        email,
        password
    })

};


const deleteUser = async(req, res)=>{

    const {id} = req.params;
    res.json({
        msg: "delete user",
        id
    })

}



module.exports = {
    postUser,
    deleteUser
}

