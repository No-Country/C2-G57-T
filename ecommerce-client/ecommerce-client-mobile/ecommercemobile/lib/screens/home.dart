import 'package:card_swiper/card_swiper.dart';
import 'package:ecommercemobile/widgets/widget.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  bool indumentaria = false;
  bool accesorios = false;
  bool colores = false;
  bool talles = false;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.purple[200],
        // drawer: Drawer(
        //   child: ListView(
        //     children: [
        //       TextButton(
        //         onPressed: () {
        //           setState(() {});
        //           indumentaria ? indumentaria = false : indumentaria = true;
        //         },
        //         child: OpcionesDrawer(
        //           titulo: 'Indumentaria',
        //         ),
        //       ),
        //       if (indumentaria)
        //         BuscadorIndumentaria(
        //           titulo: 'Remeras',
        //         ),
        //       if (indumentaria)
        //         BuscadorIndumentaria(
        //           titulo: 'Faldas',
        //         ),
        //       if (indumentaria)
        //         BuscadorIndumentaria(
        //           titulo: 'Vestidos',
        //         ),
        //       if (indumentaria)
        //         BuscadorIndumentaria(
        //           titulo: 'Pantalones',
        //         ),
        //       TextButton(
        //         onPressed: () {
        //           setState(() {});
        //           accesorios ? accesorios = false : accesorios = true;
        //         },
        //         child: OpcionesDrawer(
        //           titulo: 'Accesorios',
        //         ),
        //       ),
        //       if (accesorios)
        //         BuscadorIndumentaria(
        //           titulo: 'Aros',
        //         ),
        //       if (accesorios)
        //         BuscadorIndumentaria(
        //           titulo: 'Collares',
        //         ),
        //       TextButton(
        //         onPressed: () {
        //           setState(() {});
        //           colores ? colores = false : colores = true;
        //         },
        //         child: OpcionesDrawer(
        //           titulo: 'Colores',
        //         ),
        //       ),
        //       if (colores)
        //         BuscadorIndumentaria(
        //           titulo: 'Blanco',
        //         ),
        //       if (colores)
        //         BuscadorIndumentaria(
        //           titulo: 'Negro',
        //         ),
        //       if (colores)
        //         BuscadorIndumentaria(
        //           titulo: 'Azul',
        //         ),
        //       TextButton(
        //         onPressed: () {
        //           setState(() {});
        //           talles ? talles = false : talles = true;
        //         },
        //         child: OpcionesDrawer(
        //           titulo: 'Talles',
        //         ),
        //       ),
        //       if (talles)
        //         BuscadorIndumentaria(
        //           titulo: 'L',
        //         ),
        //       if (talles)
        //         BuscadorIndumentaria(
        //           titulo: 'XL',
        //         ),
        //       if (talles)
        //         BuscadorIndumentaria(
        //           titulo: 'XXL',
        //         )
        //     ],
        //   ),
        // ),
        drawer: DrawerPersonalizado(),
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.purple[200],
          centerTitle: true,
          title: const Text("Logo de la marca\nSlogan"),
          actions: const [
            Icon(Icons.search),
            Icon(Icons.shopping_cart_outlined)
          ],
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                height: 200,
                width: double.infinity,
                child: Swiper(
                  itemBuilder: (BuildContext context, int index) {
                    return Image.network(
                      "https://via.placeholder.com/350x150",
                      fit: BoxFit.fill,
                    );
                  },
                  itemCount: 7,
                  pagination: SwiperPagination(),
                  control: SwiperControl(),
                ),
              ),
              SizedBox(height: 5),
              const ContainerPersonalizado(
                titulo: '"Imagen de la categoria"',
              ),
              SizedBox(height: 5),
              const ContainerPersonalizado(
                titulo: '"Imagen de la categoria"',
              ),
              const SizedBox(height: 5),
              const ContainerPersonalizado(
                titulo: '"Imagen de la categoria"',
              ),
              const SizedBox(height: 10),
              const ContainerRedesSociales(),
              const SizedBox(height: 10),
              const ContainerRedesSociales(),
              const SizedBox(height: 10),
            ],
          ),
        ),
        bottomNavigationBar: FooterPersonalizado(),
      ),
    );
  }
}
