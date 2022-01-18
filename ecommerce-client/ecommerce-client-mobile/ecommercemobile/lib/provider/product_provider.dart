import 'package:ecommercemobile/models/products.dart';
import 'package:flutter/cupertino.dart';

class ProductProvider extends ChangeNotifier {
  List<Product> productsList = [];
  int carritoItem = 0;
  int pagoTotal = 0;
}
