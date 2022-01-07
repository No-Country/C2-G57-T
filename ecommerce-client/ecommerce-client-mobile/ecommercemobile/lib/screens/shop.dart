import 'package:ecommercemobile/widgets/widget.dart';
import 'package:flutter/material.dart';

class Shop extends StatefulWidget {
  Shop({Key? key}) : super(key: key);

  @override
  State<Shop> createState() => _ShopState();
}

class _ShopState extends State<Shop> {
  bool activar = false;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.purple[200],
        drawer: DrawerPersonalizado(),
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.purple[200],
          centerTitle: true,
          title: const Text("Logo de la marca\nSlogan"),
          actions: const [
            Icon(Icons.search),
            Icon(Icons.shopping_cart_outlined)
          ],
        ),
        body: Padding(
          padding: const EdgeInsets.all(15.0),
          child: SafeArea(
            child: Container(
              width: 700,
              height: 700,
              color: Colors.white,
              child: Padding(
                padding: const EdgeInsets.all(25.0),
                child: SingleChildScrollView(
                  child: Column(
                    children: [
                      Row(
                        children: [
                          Expanded(
                            child: Container(
                              color: activar ? Colors.grey : Colors.white,
                              child: TextButton(
                                onPressed: () {
                                  activar = false;
                                  setState(() {});
                                },
                                child: Text(
                                  "Mi Perfil",
                                  style: TextStyle(
                                    color: Colors.black,
                                    fontSize: 30,
                                  ),
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Container(
                              color: activar ? Colors.white : Colors.grey,
                              child: TextButton(
                                onPressed: () {
                                  activar = true;
                                  setState(() {});
                                },
                                child: Text(
                                  "Carrito",
                                  style: TextStyle(
                                    color: Colors.black,
                                    fontSize: 30,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      activar ? Text("Hola Mundo") : DatosPersonales(),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
        bottomNavigationBar: FooterPersonalizado(),
      ),
    );
  }
}

class DatosPersonales extends StatelessWidget {
  const DatosPersonales({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 15.0),
      child: Container(
        width: 500,
        height: 400,
        decoration: BoxDecoration(border: Border.all(color: Colors.black)),
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                "Datos del Usuario\n",
                style: TextStyle(fontSize: 20),
              ),
              Text("Nombre de usuario:"),
              Text("Email:"),
              Text("Contraseña:"),
              SizedBox(
                height: 10.0,
              ),
              Divider(
                thickness: 2.0,
              ),
              SizedBox(
                height: 10.0,
              ),
              Text(
                "Datos Personales\n",
                style: TextStyle(fontSize: 20),
              ),
              Text("Nombre:"),
              Text("Apellido:"),
              Text("Ciudad:"),
              Text("Direccion"),
              Text("Codigo Postal"),
              Text("\n\n\n"),
              Padding(
                padding: const EdgeInsets.only(left: 100.0),
                child: ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(context, "pay");
                    },
                    child: Text("Pagar Compra")),
              )
            ],
          ),
        ),
      ),
    );
  }
}
