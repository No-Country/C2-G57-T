import 'package:ecommercemobile/provider/login_provider.dart';
import 'package:ecommercemobile/widgets/widget.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

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
                      activar ? Carrito() : DatosPersonales(),
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

class Carrito extends StatefulWidget {
  const Carrito({
    Key? key,
  }) : super(key: key);

  @override
  State<Carrito> createState() => _CarritoState();
}

class _CarritoState extends State<Carrito> {
  bool producto = true;

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
                "Nombre del Usuario\n",
                style: TextStyle(fontSize: 20),
              ),
              Text("Productos"),
              ListTile(
                leading: Checkbox(
                    activeColor: Colors.grey,
                    value: producto,
                    onChanged: (valor) {
                      producto = valor!;
                      setState(() {});
                    }),
                title: const Text(
                  "Nombre del Producto",
                  style: TextStyle(fontSize: 14),
                ),
                trailing: Text("Precio"),
              ),
              ListTile(
                  leading: Checkbox(
                      activeColor: Colors.grey,
                      value: producto,
                      onChanged: (valor) {
                        producto = valor!;
                        setState(() {});
                      }),
                  title: const Text(
                    "Nombre del Producto",
                    style: TextStyle(fontSize: 14),
                  ),
                  trailing: Text("Precio")),
              Divider(
                thickness: 2.0,
              ),
              SizedBox(
                height: 10.0,
              ),
              Align(
                alignment: Alignment.bottomRight,
                child: Text("Subtotal"),
              ),
              SizedBox(
                height: 30.0,
              ),
              Align(
                alignment: Alignment.bottomRight,
                child: ElevatedButton.icon(
                    icon: Icon(Icons.shopping_cart_outlined),
                    onPressed: () {
                      Navigator.pushNamed(context, "pay");
                    },
                    label: Text("Pagar Compra")),
              )
            ],
          ),
        ),
      ),
    );
  }
}

class DatosPersonales extends StatefulWidget {
  const DatosPersonales({
    Key? key,
  }) : super(key: key);

  @override
  State<DatosPersonales> createState() => _DatosPersonalesState();
}

class _DatosPersonalesState extends State<DatosPersonales> {
  @override
  Widget build(BuildContext context) {
    final loginFormProvider = Provider.of<LoginFormProvider>(context);
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
              Text("Nombre de usuario: ${loginFormProvider.name}"),
              Text("Email:${loginFormProvider.email}"),
              Text("Contraseña:${loginFormProvider.password}"),
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
              ElevatedButton(
                  onPressed: () {
                    print(
                        "${loginFormProvider.email},${loginFormProvider.password},${loginFormProvider.name},");
                  },
                  child: Icon(Icons.add))
            ],
          ),
        ),
      ),
    );
  }
}
