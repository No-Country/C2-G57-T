import 'package:ecommercemobile/models/products.dart';
import 'package:flutter/material.dart';

class FiltradoProducto extends ChangeNotifier {
  List<Product> productosPantalon = [];
  List<Product> productosRemera = [];
  List<Product> productosFalda = [];
  List<Product> productosVestido = [];
  List<Product> productosTalleL = [];
  List<Product> productosTalleXL = [];
  List<Product> productosTalleXXL = [];

  FiltradoProducto() {
    filtrarPorCategoria("Pantalon", productosPantalon);
    filtrarPorCategoria("Remera", productosRemera);
    filtrarPorCategoria("Falda", productosFalda);
    filtrarPorCategoria("Vestido", productosVestido);
    filtrarPorTalle("L", productosTalleL);
    filtrarPorTalle("XL", productosTalleXL);

    //TODO: Revisar talle XXL
    filtrarPorTalle("XXL", productosTalleXXL);

    verProductosPorCategoria();
  }

  filtrarPorCategoria(
      String categoriaDeRopa, List<Product> listaDeProductosCategoria) {
    final filtroProductos = productos
        .where((producto) => producto.subcategory.contains(categoriaDeRopa))
        .toList();

    filtroProductos.forEach((product) {
      listaDeProductosCategoria.add(product);
    });

    //print(filtroProductos[0].description);
  }

  filtrarPorTalle(String talle, List<Product> listaDeProductosCategoria) {
    final filtroProductos = productos
        .where((producto) =>
            producto.talle1.contains(talle) && producto.talle2.contains(talle))
        .toList();

    filtroProductos.forEach((product) {
      listaDeProductosCategoria.add(product);
    });
  }

  verProductosPorCategoria() {
    print("Pantalon");
    print(productosPantalon.length);
    print("Remera");
    print(productosRemera.length);
    print("Falda");
    print(productosFalda.length);
    print("Vestido");
    print(productosVestido.length);
    print("productos L");
    print(productosTalleL.length);
    print("productos XL");
    print(productosTalleXL.length);
    print("productos XXL");
    print(productosTalleXXL.length);
  }
}
