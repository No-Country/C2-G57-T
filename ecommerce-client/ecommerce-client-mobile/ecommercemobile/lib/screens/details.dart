import 'package:ecommercemobile/widgets/widget.dart';
import 'package:flutter/material.dart';

class Detail extends StatefulWidget {
  const Detail({Key? key}) : super(key: key);

  @override
  _DetailState createState() => _DetailState();
}

class _DetailState extends State<Detail> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.purple[200],
      drawer: Drawer(),
      appBar: AppBar(
        elevation: 0,
        backgroundColor: Colors.purple[200],
        centerTitle: true,
        title: const Text("Logo de la marca\nSlogan"),
        actions: const [Icon(Icons.search), Icon(Icons.shopping_cart_outlined)],
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(
              height: 250,
              width: 345,
              color: Colors.grey,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Container(
                  height: 80,
                  width: 80,
                  color: Colors.grey,
                ),
                Container(
                  height: 80,
                  width: 80,
                  color: Colors.grey,
                ),
                Container(
                  height: 80,
                  width: 80,
                  color: Colors.grey,
                )
              ],
            ),
            Text("Nombre del Producto"),
            Text("Precio"),
            Text("Colores"),
            Row(
              children: [
                Container(
                  height: 20,
                  width: 20,
                  decoration: BoxDecoration(
                      color: Colors.black,
                      borderRadius: BorderRadius.circular(20)),
                ),
                SizedBox(
                  width: 15,
                ),
                Container(
                  height: 20,
                  width: 20,
                  decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(20)),
                ),
              ],
            ),
            Text("Talles"),
            Row(
              children: [
                Container(
                  height: 20,
                  width: 20,
                  decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(20)),
                  child: Center(
                    child: Text("L"),
                  ),
                ),
                SizedBox(
                  width: 15,
                ),
                Container(
                  height: 20,
                  width: 20,
                  decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(20)),
                  child: Center(
                    child: Text("XL"),
                  ),
                ),
                SizedBox(
                  width: 15,
                ),
                Container(
                  height: 20,
                  width: 20,
                  decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(20)),
                  child: Center(
                    child: Text(
                      "XXL",
                      style: TextStyle(fontSize: 10),
                    ),
                  ),
                )
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
                  onPressed: () {},
                  icon: Icon(Icons.shopping_cart_outlined),
                  label: Text("COMPRAR")),
            ),
          ],
        ),
      ),
      bottomNavigationBar: FooterPersonalizado(),
    );
  }
}
