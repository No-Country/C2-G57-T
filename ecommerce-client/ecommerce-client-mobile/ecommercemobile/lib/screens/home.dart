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
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;

    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.purple[200],
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
                height: height * 0.3,
                width: double.infinity,
                child: Swiper(
                  itemBuilder: (BuildContext context, int index) {
                    return GestureDetector(
                      onTap: () => Navigator.pushNamed(context, "detail"),
                      child: Image.asset(
                        "assets/${index + 1}.jpg",
                        fit: BoxFit.fill,
                      ),
                    );
                  },
                  itemCount: 3,
                  pagination: SwiperPagination(),
                  control: SwiperControl(),
                ),
              ),
              SizedBox(height: height * 0.05),
              ImagenCategoria(categoria: 'Remera', imagenAssets: '7'),
              SizedBox(height: height * 0.05),
              ImagenCategoria(categoria: "Pantalon", imagenAssets: "4"),
              SizedBox(height: height * 0.05),
              ImagenCategoria(categoria: "Accesorio", imagenAssets: "1"),
              SizedBox(height: height * 0.05),
              const ContainerRedesSociales(),
              SizedBox(height: height * 0.05),
              const ContainerRedesSociales(),
              SizedBox(height: height * 0.1),
            ],
          ),
        ),
        bottomNavigationBar: FooterPersonalizado(),
      ),
    );
  }
}

class ImagenCategoria extends StatelessWidget {
  const ImagenCategoria(
      {Key? key, required this.categoria, required this.imagenAssets})
      : super(key: key);

  final String categoria;
  final String imagenAssets;
  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;
    return GestureDetector(
      onTap: () {
        Navigator.pushNamed(context, "grid");
      },
      child: Center(
        child: Container(
          height: height * 0.6,
          width: double.infinity,
          child: Stack(alignment: Alignment.bottomCenter, children: [
            FadeInImage(
              placeholder: AssetImage("assets/loading.gif"),
              image: AssetImage("assets/${imagenAssets}.jpg"),
              height: height * 0.5,
              fit: BoxFit.cover,
            ),
            Container(
              height: height * 0.1,
              width: double.infinity,
              color: Colors.black87,
              child: Center(
                child: Text(
                  categoria,
                  style: TextStyle(color: Colors.white),
                ),
              ),
            )
          ]),
        ),
      ),
    );
  }
}
