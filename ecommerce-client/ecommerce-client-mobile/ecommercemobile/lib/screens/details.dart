import 'package:ecommercemobile/widgets/widget.dart';
import 'package:flutter/material.dart';

class Detail extends StatefulWidget {
  const Detail({Key? key}) : super(key: key);

  @override
  _DetailState createState() => _DetailState();
}

class _DetailState extends State<Detail> {
  final int valor = 1;

  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;
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
        body: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Center(
                child: Container(
                  height: height * 0.7,
                  width: width * 0.6,
                  child: ImagenPrincipal(
                    color: Colors.pink,
                  ),
                ),
              ),
              //ImagenesSecundarias(),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Container(
                    height: height * 0.2,
                    width: width * 0.3,
                    color: Colors.yellow,
                  ),
                  Container(
                    height: height * 0.2,
                    width: width * 0.3,
                    color: Colors.green,
                  ),
                  Container(
                    height: height * 0.2,
                    width: width * 0.3,
                    color: Colors.red,
                  )
                ],
              ),
              Text("Nombre del Producto"),
              Text("Precio"),
              Text("Colores"),
              Row(
                children: [
                  BotonColorTalle(
                    color: Colors.black,
                  ),
                  SizedBox(
                    width: 15,
                  ),
                  BotonColorTalle(),
                ],
              ),
              Text("Talles"),
              Row(
                children: [
                  BotonColorTalle(
                      child: Text("L", style: TextStyle(fontSize: 11))),
                  SizedBox(width: 15),
                  BotonColorTalle(
                      child: Text("XL", style: TextStyle(fontSize: 11))),
                  SizedBox(width: 15),
                  BotonColorTalle(
                      child: Text("XXL", style: TextStyle(fontSize: 11))),
                ],
              ),
              Text("Cantidad"),
              Container(
                height: 20,
                width: 60,
                decoration:
                    BoxDecoration(border: Border.all(color: Colors.black)),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    Text("-"),
                    Text("1"),
                    Text("+"),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(left: 120.0),
                child: ElevatedButton.icon(
                    style: ButtonStyle(
                      backgroundColor: MaterialStateProperty.all(Colors.pink),
                    ),
                    onPressed: () {
                      setState(() {});
                      mostradDialogoCompra(context);
                    },
                    icon: Icon(Icons.shopping_cart_outlined),
                    label: Text("COMPRAR")),
              ),
            ],
          ),
        ),
        bottomNavigationBar: FooterPersonalizado(),
      ),
    );
  }

  Future<dynamic> mostradDialogoCompra(BuildContext context) {
    return showDialog(
      barrierDismissible: true,
      context: context,
      builder: (BuildContext context) {
        return Container(
          height: double.infinity,
          width: double.infinity,
          color: Colors.black12,
          child: AlertDialog(
            content: Container(
              height: 250,
              width: 370,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Padding(
                    padding: const EdgeInsets.only(left: 230),
                    child: IconButton(
                      icon: Icon(Icons.cancel_outlined),
                      onPressed: () {
                        Navigator.pop(context);
                      },
                    ),
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                        height: 100,
                        width: 100,
                        color: Colors.grey,
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text("Añadiste al carrito:"),
                          Text("Nombre del producto"),
                          Text("Color:Negro"),
                          Text("Color:Negro"),
                          Text("Total: 00000")
                        ],
                      )
                    ],
                  ),
                  ElevatedButton.icon(
                      onPressed: () {
                        Navigator.pushNamed(context, "shop");
                      },
                      icon: Icon(Icons.shopping_cart_outlined),
                      label: Text("Finalizar compra")),
                  ElevatedButton(
                      onPressed: () {
                        Navigator.pushNamed(context, "grid");
                      },
                      child: Text("Seguir Comprando\t\t\t"))
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}

class BotonColorTalle extends StatelessWidget {
  const BotonColorTalle({
    Key? key,
    this.color = Colors.white,
    this.child,
  }) : super(key: key);

  final Color color;
  final Widget? child;
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 20,
      width: 20,
      decoration:
          BoxDecoration(color: color, borderRadius: BorderRadius.circular(20)),
      child: Center(child: child),
    );
  }
}

class ImagenesSecundarias extends StatelessWidget {
  const ImagenesSecundarias({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        Container(
          height: 80,
          width: 80,
          color: Colors.yellow,
        ),
        Container(
          height: 80,
          width: 80,
          color: Colors.green,
        ),
        Container(
          height: 80,
          width: 80,
          color: Colors.red,
        )
      ],
    );
  }
}

class ImagenPrincipal extends StatelessWidget {
  const ImagenPrincipal({
    Key? key,
    required this.color,
  }) : super(key: key);

  final Color color;

  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;
    return Container(
      height: height * 0.5,
      width: width * 0.5,
      color: color,
    );
  }
}
