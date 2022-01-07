import 'package:ecommercemobile/widgets/widget.dart';
import 'package:flutter/material.dart';

class GridScreen extends StatelessWidget {
  const GridScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
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
        body: Container(
          height: 600,
          width: double.infinity,
          child: GridView.builder(
            gridDelegate:
                SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
            itemBuilder: (_, index) => GestureDetector(
              onTap: () => Navigator.pushNamed(context, "detail"),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    height: 150,
                    width: 150,
                    color: Colors.grey,
                    child: FadeInImage(
                      placeholder: AssetImage("assets/loading.gif"),
                      image: AssetImage("assets/${index + 1}.jpg"),
                    ),
                  ),
                  Text("Nombre del Producto"),
                  Text("Precio")
                ],
              ),
            ),
            itemCount: 8,
          ),
        ),
        bottomNavigationBar: FooterPersonalizado(),
      ),
    );
  }
}
