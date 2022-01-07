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
                    return GestureDetector(
                      onTap: () => Navigator.pushNamed(context, "detail"),
                      child: Image.network(
                        "https://via.placeholder.com/350x150",
                        fit: BoxFit.fill,
                      ),
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
