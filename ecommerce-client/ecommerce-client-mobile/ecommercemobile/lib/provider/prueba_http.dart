import 'dart:convert';

import 'package:ecommercemobile/models/products.dart';
import 'package:ecommercemobile/models/products_destacados.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class HttpPeticiones extends ChangeNotifier {
  HttpPeticiones() {
    destacados();
  }

  List<Producto> productosDestacados = [];

  destacados() async {
    final url = Uri.http("10.0.2.2:5000", "/api/products/destacados");
    final respuesta = await http.get(url);
    final List<Producto> producto = respuestaFromMap(respuesta.body);
    productosDestacados = producto;
  }
}
