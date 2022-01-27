import 'package:ecommercemobile/models/products.dart';
import 'package:flutter/material.dart';

class FiltradoProducto extends ChangeNotifier {
  List<Product> productosPantalon = [];
  List<Product> productosRemera = [];
  List<Product> productosFalda = [];
  List<Product> productosVestido = [];
  List<Product> productosTalleXL = [];
  List<Product> productosTalleXXL = [];
  List<Product> productosTalleLPrueba = [];

  FiltradoProducto() {
    filtrarPorCategoria("Pantalon", productosPantalon);
    filtrarPorCategoria("Remera", productosRemera);
    filtrarPorCategoria("Falda", productosFalda);
    filtrarPorCategoria("Vestido", productosVestido);
    filtrarPorTalleEspecial("L", productosTalleLPrueba);
    filtrarPorTalle("XL", productosTalleXL);
    filtrarPorTalle("XXL", productosTalleXXL);
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
            producto.talle1.contains(talle) || producto.talle2.contains(talle))
        .toList();

    filtroProductos.forEach((product) {
      listaDeProductosCategoria.add(product);
    });
  }

  filtrarPorTalleEspecial(
      String talle, List<Product> listaDeProductosCategoria) {
    final filtroProductos = productos
        .where((producto) =>
            producto.talle1.startsWith(talle) ||
            producto.talle2.startsWith(talle))
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
    print("productos talle L");
    print(productosTalleLPrueba.length);
    print("productos XL");
    print(productosTalleXL.length);
    print("productos XXL");
    print(productosTalleXXL.length);
    print("Total de productos del catalogo:  ${productos.length}");
    for (Product producto in productos) {
      print(producto.name + "  " + producto.talle1 + "  " + producto.talle2);
    }
  }
}
