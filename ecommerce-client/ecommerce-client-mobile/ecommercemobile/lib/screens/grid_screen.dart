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
          actions: [CarritoCompras(productProvider: productProvider)],
        ),
        body: GridView.builder(
          itemCount: productos.length,
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
        ),
      ),
    );
  }
}
