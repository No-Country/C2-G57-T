const express = require(`express`)
const app = express()

//settingss
app.set("port", 3000)
app.get("/", (req, res) => {
    res.send("Bienvenido Wey")
})
app.listen(app.get("port"), () => {
    console.log(`la aplicaison esta corriendo en el puerto ${app.get('port')}`)

})