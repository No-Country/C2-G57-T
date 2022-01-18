import 'package:ecommercemobile/models/products.dart';
import 'package:ecommercemobile/provider/product_provider.dart';
import 'package:ecommercemobile/widgets/widget.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class GridScreen extends StatelessWidget {
  GridScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final productProvider = Provider.of<ProductProvider>(context);

    return SafeArea(
      child: Scaffold(
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
        body: Container(
          height: 600,
          width: double.infinity,
          child: GridView.builder(
            gridDelegate:
                SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
            itemBuilder: (_, index) {
              final producto = productos[index];
              return GestureDetector(
                onTap: () =>
                    Navigator.pushNamed(context, "detail", arguments: producto),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      height: 150,
                      width: 150,
                      color: Colors.grey,
                      child: FadeInImage(
                        placeholder: AssetImage("assets/loading.gif"),
                        image: AssetImage("assets/${index + 4}.jpg"),
                      ),
                    ),
                    Text(producto.name),
                    Text(producto.price.toString())
                  ],
                ),
              );
            },
            itemCount: productos.length,
          ),
        ),
        bottomNavigationBar: FooterPersonalizado(),
      ),
    );
  }
}
