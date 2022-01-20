import 'package:ecommercemobile/provider/product_provider.dart';
import 'package:flutter/material.dart';

class CarritoCompras extends StatelessWidget {
  const CarritoCompras({
    Key? key,
    required this.productProvider,
  }) : super(key: key);

  final ProductProvider productProvider;

  @override
  Widget build(BuildContext context) {
    return Padding(
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
                  borderRadius: BorderRadius.circular(100), color: Colors.red),
              child: Text("${productProvider.carritoItem}",
                  style: TextStyle(color: Colors.white, fontSize: 10)),
            ),
          )
        ],
      ),
    );
  }
}
