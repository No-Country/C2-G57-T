import 'package:card_swiper/card_swiper.dart';
import 'package:ecommercemobile/models/products.dart';
import 'package:ecommercemobile/widgets/widget.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  //probando otra ves
  bool indumentaria = false;
  bool accesorios = false;
  bool colores = false;
  bool talles = false;

  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;

    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.purple[200],
        drawer: DrawerPersonalizado(),
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.purple[200],
          centerTitle: true,
          title: const Text("Mujeres Reales"),
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
                      child: Image.asset("assets/${index + 10}.jpg",
                          fit: BoxFit.contain),
                    );
                  },
                  itemCount: 4,
                  pagination: SwiperPagination(),
                  control: SwiperControl(),
                ),
              ),
              SizedBox(height: height * 0.01),

              //TODO: Hacer la navegacion y enviar producto

              GestureDetector(
                  onTap: () {
                    Navigator.of(context)
                        .pushNamed("detail", arguments: productos);
                  },
                  child: ImagenCategoria(
                      categoria: 'Pantalon', imagenAssets: '14')),
              SizedBox(height: height * 0.01),
              ImagenCategoria(categoria: "30% off", imagenAssets: "16"),
              SizedBox(height: height * 0.01),
              ImagenCategoria(categoria: "Remeras", imagenAssets: "15"),
              SizedBox(height: height * 0.01),
              ContainerRedesSociales(
                  imagenAssets: '17', icono: Icons.photo_camera_sharp),
              SizedBox(height: height * 0.01),
              ContainerRedesSociales(
                  imagenAssets: '18', icono: Icons.local_parking_outlined),
              SizedBox(height: height * 0.01),
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
          height: height * 0.5,
          width: width * 0.95,
          child: Stack(
            children: [
              Container(
                height: height * 0.5,
                width: width * 1,
                child: FadeInImage(
                  placeholder: AssetImage("assets/loading.gif"),
                  image: AssetImage("assets/${imagenAssets}.jpg"),
                  height: height * 0.5,
                  fit: BoxFit.fill,
                ),
              ),
              Center(
                child: Container(
                    height: 50,
                    width: 150,
                    color: Colors.white,
                    alignment: Alignment.center,
                    child: Text(
                      categoria,
                      style: TextStyle(color: Colors.black, fontSize: 20.0),
                    )),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
