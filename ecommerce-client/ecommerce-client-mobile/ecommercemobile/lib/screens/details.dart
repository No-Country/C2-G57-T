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
      drawer: const Drawer(),
      appBar: AppBar(
        elevation: 0,
        backgroundColor: Colors.purple[200],
        centerTitle: true,
        title: const Text("Logo de la marca\nSlogan"),
        actions: const [Icon(Icons.search), Icon(Icons.shopping_cart_outlined)],
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Container(
            height: 600,
            width: double.infinity,
            color: Colors.grey,
          ),
          SizedBox(height: 30),
          Expanded(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Container(
                  height: 100,
                  width: 100,
                  color: Colors.grey,
                ),
                Container(
                  height: 100,
                  width: 100,
                  color: Colors.grey,
                ),
                Container(
                  height: 100,
                  width: 100,
                  color: Colors.grey,
                )
              ],
            ),
          ),
          Text("Nombre del Producto"),
          Text("Precio"),
          Text("Colores"),
          Row(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(100),
                child: Container(
                  color: Colors.black,
                ),
              ),
              ClipRRect(
                borderRadius: BorderRadius.circular(100),
                child: Container(
                  color: Colors.grey,
                ),
              )
            ],
          ),
          Text("Talles"),
        ],
      ),
    );
  }
}
