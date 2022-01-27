import 'package:ecommercemobile/models/products.dart';
import 'package:ecommercemobile/models/products_destacados.dart';
import 'package:flutter/cupertino.dart';

class ProductProvider extends ChangeNotifier {
  List<Producto> productsList = [];
  int carritoItem = 0;
  int pagoTotal = 0;
  List<int> cantidadProducto = [];
  List<String> talleSeleccionado = [];
}
