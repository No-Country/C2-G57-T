import 'package:flutter/material.dart';

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
  const BuscadorIndumentaria({Key? key, required this.titulo})
      : super(key: key);

  final String titulo;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(titulo),
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
    return Drawer(
      child: ListView(
        children: [
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
            ),
          if (indumentaria)
            BuscadorIndumentaria(
              titulo: 'Faldas',
            ),
          if (indumentaria)
            BuscadorIndumentaria(
              titulo: 'Vestidos',
            ),
          if (indumentaria)
            BuscadorIndumentaria(
              titulo: 'Pantalones',
            ),
          TextButton(
            onPressed: () {
              setState(() {});
              accesorios ? accesorios = false : accesorios = true;
            },
            child: OpcionesDrawer(
              titulo: 'Accesorios',
            ),
          ),
          if (accesorios)
            BuscadorIndumentaria(
              titulo: 'Aros',
            ),
          if (accesorios)
            BuscadorIndumentaria(
              titulo: 'Collares',
            ),
          TextButton(
            onPressed: () {
              setState(() {});
              colores ? colores = false : colores = true;
            },
            child: OpcionesDrawer(
              titulo: 'Colores',
            ),
          ),
          if (colores)
            BuscadorIndumentaria(
              titulo: 'Blanco',
            ),
          if (colores)
            BuscadorIndumentaria(
              titulo: 'Negro',
            ),
          if (colores)
            BuscadorIndumentaria(
              titulo: 'Azul',
            ),
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
            ),
          if (talles)
            BuscadorIndumentaria(
              titulo: 'XL',
            ),
          if (talles)
            BuscadorIndumentaria(
              titulo: 'XXL',
            )
        ],
      ),
    );
  }
}
