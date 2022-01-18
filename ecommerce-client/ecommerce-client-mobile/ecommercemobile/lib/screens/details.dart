import 'package:ecommercemobile/models/products.dart';
import 'package:ecommercemobile/provider/product_provider.dart';
import 'package:ecommercemobile/widgets/widget.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Detail extends StatefulWidget {
  const Detail({Key? key}) : super(key: key);

  @override
  _DetailState createState() => _DetailState();
}

class _DetailState extends State<Detail> {
  int valor = 0;
  bool aumentar = false;
  bool aumentar1 = false;
  bool aumentar2 = false;
  bool aumentar3 = false;
  bool seleccionar = false;
  bool seleccionar1 = false;
  bool seleccionar2 = false;
  bool seleccionar3 = false;

  @override
  Widget build(BuildContext context) {
    final Product producto =
        ModalRoute.of(context)!.settings.arguments as Product;
    final productProvider = Provider.of<ProductProvider>(context);

    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.purple[200],
        drawer: DrawerPersonalizado(),
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.purple[200],
          centerTitle: true,
          title: const Text("Logo de la marca\nSlogan"),
          actions: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Stack(
                alignment: AlignmentDirectional.center,
                children: [
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(
                        context,
                        "shop",
                      );
                    },
                    child: Icon(
                      Icons.shopping_cart,
                      size: 30,
                    ),
                  ),
                  Positioned(
                    top: 0,
                    right: 0,
                    left: 20,
                    child: Container(
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(100),
                          color: Colors.black),
                      child: Text("${productProvider.carritoItem}",
                          style: TextStyle(color: Colors.white, fontSize: 10)),
                    ),
                  )
                ],
              ),
            )
          ],
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(15.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Center(
                      child: GestureDetector(
                        onTap: () {
                          setState(() {});
                          aumentar = !aumentar;
                          aumentar1 = false;
                          aumentar2 = false;
                          aumentar3 = false;
                        },
                        child: AnimatedContainer(
                          height: aumentar ? 500 : 300,
                          width: aumentar ? 500 : 300,
                          duration: Duration(milliseconds: 200),
                          child: ImagenPrincipal(
                            imagenAssets: producto.imagen,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 20.0,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        GestureDetector(
                          onTap: () {
                            setState(() {
                              aumentar1 = !aumentar1;
                              aumentar = false;
                              aumentar2 = false;
                              aumentar3 = false;
                            });
                          },
                          child: AnimatedContainer(
                            height: aumentar1 ? 150 : 100,
                            width: aumentar1 ? 150 : 100,
                            duration: Duration(milliseconds: 200),
                            child: FadeInImage(
                              placeholder: AssetImage("assets/loading.gif"),
                              image: AssetImage(producto.imagen),
                            ),
                          ),
                        ),
                        GestureDetector(
                          onTap: () {
                            setState(() {
                              aumentar2 = !aumentar2;
                              aumentar1 = false;
                              aumentar = false;
                              aumentar3 = false;
                            });
                          },
                          child: AnimatedContainer(
                            height: aumentar2 ? 150 : 100,
                            width: aumentar2 ? 150 : 100,
                            duration: Duration(milliseconds: 200),
                            child: FadeInImage(
                              placeholder: AssetImage("assets/loading.gif"),
                              image: AssetImage(producto.imagen),
                            ),
                          ),
                        ),
                        GestureDetector(
                          onTap: () {
                            setState(() {
                              aumentar3 = !aumentar3;
                              aumentar1 = false;
                              aumentar2 = false;
                              aumentar = false;
                            });
                          },
                          child: AnimatedContainer(
                            height: aumentar3 ? 150 : 100,
                            width: aumentar3 ? 150 : 100,
                            duration: Duration(milliseconds: 200),
                            child: FadeInImage(
                              placeholder: AssetImage("assets/loading.gif"),
                              image: AssetImage(producto.imagen),
                            ),
                          ),
                        )
                      ],
                    ),
                    Text(
                      producto.name,
                      style: TextStyle(fontSize: 25),
                    ),
                    Text("Precio: \$${producto.price}",
                        style: TextStyle(fontSize: 25)),
                    Text("Colores", style: TextStyle(fontSize: 25)),
                    Row(
                      children: [
                        GestureDetector(
                          onTap: () {
                            seleccionar = !seleccionar;
                            seleccionar1 = false;
                            setState(() {});
                          },
                          child: BotonColorTalle(
                              color: Colors.black,
                              color1:
                                  seleccionar ? Colors.white : Colors.black),
                        ),
                        SizedBox(
                          width: 15,
                        ),
                        GestureDetector(
                            onTap: () {
                              seleccionar = false;
                              seleccionar1 = !seleccionar1;

                              setState(() {});
                            },
                            child: BotonColorTalle(
                                color1: seleccionar1
                                    ? Colors.black
                                    : Colors.white)),
                      ],
                    ),
                    Text("Talles"),
                    Row(
                      children: [
                        GestureDetector(
                          onTap: () {
                            seleccionar2 = !seleccionar2;
                            seleccionar3 = false;
                            setState(() {});
                          },
                          child: BotonColorTalle(
                              color1:
                                  seleccionar2 ? Colors.black : Colors.white,
                              child: Text(
                                producto.talle1,
                                style: TextStyle(fontSize: 20),
                              )),
                        ),
                        SizedBox(width: 15),
                        GestureDetector(
                          onTap: () {
                            seleccionar3 = !seleccionar3;
                            seleccionar2 = false;
                            setState(() {});
                          },
                          child: BotonColorTalle(
                              color1:
                                  seleccionar3 ? Colors.black : Colors.white,
                              child: Text(producto.talle2,
                                  style: TextStyle(fontSize: 20))),
                        ),
                        SizedBox(width: 15),
                        BotonColorTalle(
                            child: Text("XXL", style: TextStyle(fontSize: 20))),
                      ],
                    ),
                    Text("Cantidad"),
                    Container(
                      width: 120,
                      decoration: BoxDecoration(
                          border: Border.all(color: Colors.black)),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          IconButton(
                              icon: Icon(
                                Icons.minimize_rounded,
                                size: 20,
                              ),
                              onPressed: () {
                                setState(() {
                                  valor--;
                                });
                              }),
                          Text(
                            "$valor",
                            style: TextStyle(fontSize: 20),
                          ),
                          IconButton(
                              onPressed: () {
                                setState(() {
                                  valor++;
                                });
                              },
                              icon: Icon(
                                Icons.add,
                                size: 20,
                              )),
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 120.0),
                      child: ElevatedButton.icon(
                          style: ButtonStyle(
                            backgroundColor:
                                MaterialStateProperty.all(Colors.pink),
                          ),
                          onPressed: () {
                            setState(() {});
                            mostradDialogoCompra(context, producto);
                          },
                          icon: Icon(Icons.shopping_cart_outlined),
                          label: Text("COMPRAR")),
                    ),
                  ],
                ),
              ),
              //FooterPersonalizado()
              SizedBox(
                height: 50,
              ),
              ContainerRedesSociales(
                  imagenAssets: '17', icono: Icons.photo_camera_sharp),
              SizedBox(height: 10),
              ContainerRedesSociales(
                  imagenAssets: '18', icono: Icons.local_parking_outlined),
              SizedBox(height: 10),
            ],
          ),
        ),
      ),
    );
  }

  Future<dynamic> mostradDialogoCompra(BuildContext context, Product producto) {
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
                        child: FadeInImage(
                            placeholder: AssetImage("assets/loading.gif"),
                            image: AssetImage(producto.imagen)),
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            "${producto.name}",
                            style: TextStyle(fontSize: 15.0),
                          ),
                          Text("${producto.color1}"),
                          Text("\$${producto.price}")
                        ],
                      )
                    ],
                  ),
                  ElevatedButton.icon(
                      onPressed: () {
                        final productProvider = Provider.of<ProductProvider>(
                            context,
                            listen: false);

                        setState(() {
                          productProvider.carritoItem++;
                          productProvider.productsList.add(producto);
                        });
                      },
                      icon: Icon(Icons.shopping_cart_outlined),
                      label: Text("Agregar al carrito")),
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
    this.color1 = Colors.black,
  }) : super(key: key);

  final Color color;
  final Color color1;
  final Widget? child;
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 40,
      width: 40,
      decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: color1, width: 2.0)),
      child: Center(child: child),
    );
  }
}

class ImagenPrincipal extends StatelessWidget {
  const ImagenPrincipal({
    Key? key,
    required this.imagenAssets,
  }) : super(key: key);

  final String imagenAssets;

  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;
    return Container(
      height: height * 0.5,
      width: width * 0.5,
      child: FadeInImage(
        placeholder: AssetImage("assets/loading.gif"),
        image: AssetImage(imagenAssets),
      ),
    );
  }
}
