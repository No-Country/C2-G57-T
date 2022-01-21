import 'package:ecommercemobile/models/products.dart';
import 'package:flutter/material.dart';

class FiltradoProducto extends ChangeNotifier {
  List<Product> productosPantalon = [];
  List<Product> productosRemera = [];
  List<Product> productosFalda = [];
  List<Product> productosVestido = [];

  FiltradoProducto() {
    filtrarPorCategoria("Pantalon", productosPantalon);
    filtrarPorCategoria("Remera", productosRemera);
    filtrarPorCategoria("Falda", productosFalda);
    filtrarPorCategoria("Vestido", productosVestido);
    verProductosPorCategoria();
  }

  filtrarPorCategoria(
      String categoria, List<Product> listaDeProductosCategoria) {
    final filtroProductos = productos
        .where((producto) => producto.subcategory.contains(categoria))
        .toList();

    filtroProductos.forEach((product) {
      listaDeProductosCategoria.add(product);
    });

    //print(filtroProductos[0].description);
  }

  verProductosPorCategoria() {
    print(productosPantalon);
    print("---");
    print(productosRemera);
    print("---");
    print(productosFalda);
    print("---");
    print(productosVestido);
  }
}
