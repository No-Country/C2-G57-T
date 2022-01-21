import 'package:ecommercemobile/provider/filtrado_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class OpcionesDrawer extends StatelessWidget {
  const OpcionesDrawer({
    Key? key,
    required this.titulo,
  }) : super(key: key);

  final String titulo;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(titulo),
      trailing: Icon(Icons.navigate_next_sharp),
    );
  }
}

class BuscadorIndumentaria extends StatelessWidget {
  const BuscadorIndumentaria(
      {Key? key, required this.titulo, required this.rutaProvider})
      : super(key: key);

  final String titulo;
  final Object rutaProvider;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () =>
          Navigator.of(context).pushNamed("grid", arguments: rutaProvider),
      child: ListTile(
        title: Text(titulo),
      ),
    );
  }
}

class DrawerPersonalizado extends StatefulWidget {
  const DrawerPersonalizado({Key? key}) : super(key: key);

  @override
  State<DrawerPersonalizado> createState() => _DrawerPersonalizadoState();
}

class _DrawerPersonalizadoState extends State<DrawerPersonalizado> {
  bool indumentaria = false;
  bool accesorios = false;
  bool colores = false;
  bool talles = false;

  @override
  Widget build(BuildContext context) {
    final filtradoProducto = Provider.of<FiltradoProducto>(context);

    return Drawer(
      child: ListView(
        children: [
          DrawerHeader(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  height: 50,
                  width: 50,
                  color: Colors.grey,
                  child: Icon(
                    Icons.person,
                    size: 40,
                  ),
                ),
                Text("Nombre del Usuario")
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 25),
            child: GestureDetector(
                onTap: () => Navigator.of(context).pushNamed("home"),
                child: Text("Home")),
          ),
          TextButton(
            onPressed: () {
              setState(() {});
              indumentaria ? indumentaria = false : indumentaria = true;
            },
            child: OpcionesDrawer(
              titulo: 'Indumentaria',
            ),
          ),
          if (indumentaria)
            BuscadorIndumentaria(
                titulo: 'Remeras',
                rutaProvider: filtradoProducto.productosRemera),
          if (indumentaria)
            BuscadorIndumentaria(
                titulo: 'Faldas',
                rutaProvider: filtradoProducto.productosFalda),
          if (indumentaria)
            BuscadorIndumentaria(
                titulo: 'Vestidos',
                rutaProvider: filtradoProducto.productosVestido),
          if (indumentaria)
            BuscadorIndumentaria(
                titulo: 'Pantalones',
                rutaProvider: filtradoProducto.productosPantalon),
          // TextButton(
          //   onPressed: () {
          //     setState(() {});
          //     accesorios ? accesorios = false : accesorios = true;
          //   },
          //   child: OpcionesDrawer(
          //     titulo: 'Accesorios',
          //   ),
          // ),
          // if (accesorios)
          //   BuscadorIndumentaria(
          //     titulo: 'Aros',
          //   ),
          // if (accesorios)
          //   BuscadorIndumentaria(
          //     titulo: 'Collares',
          //   ),
          // TextButton(
          //   onPressed: () {
          //     setState(() {});
          //     colores ? colores = false : colores = true;
          //   },
          //   child: OpcionesDrawer(
          //     titulo: 'Colores',
          //   ),
          // ),
          // if (colores)
          //   BuscadorIndumentaria(
          //     titulo: 'Blanco',
          //   ),
          // if (colores)
          //   BuscadorIndumentaria(
          //     titulo: 'Negro',
          //   ),
          // if (colores)
          //   BuscadorIndumentaria(
          //     titulo: 'Azul',
          //   ),
          TextButton(
            onPressed: () {
              setState(() {});
              talles ? talles = false : talles = true;
            },
            child: OpcionesDrawer(
              titulo: 'Talles',
            ),
          ),
          if (talles)
            BuscadorIndumentaria(
                titulo: 'L',
                rutaProvider: filtradoProducto.productosTalleLPrueba),
          if (talles)
            BuscadorIndumentaria(
                titulo: 'XL', rutaProvider: filtradoProducto.productosTalleXL),
          if (talles)
            BuscadorIndumentaria(
                titulo: 'XXL', rutaProvider: filtradoProducto.productosTalleXXL)
        ],
      ),
    );
  }
}
