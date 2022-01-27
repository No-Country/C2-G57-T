
const getIdCloudinary = (url="")=> {

    const nameArr = url.split('/');
    const name = nameArr[nameArr.length - 1];
    const [public_id] = name.split('.');

    return public_id

};

module.exports = {
    getIdCloudinary
}
