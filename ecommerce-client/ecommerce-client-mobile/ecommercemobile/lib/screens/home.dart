import 'package:card_swiper/card_swiper.dart';
import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.purple[200],
      drawer: const Drawer(),
      appBar: AppBar(
        elevation: 0,
        backgroundColor: Colors.purple[200],
        centerTitle: true,
        title: const Text("Logo de la marca\nSlogan"),
        actions: const [Icon(Icons.search), Icon(Icons.shopping_cart_outlined)],
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
            const SizedBox(height: 10),
            const ContainerPersonalizado(
              titulo: '"Imagen de la categoria"',
            ),
            const SizedBox(height: 10),
            const ContainerPersonalizado(
              titulo: '"Imagen de la categoria"',
            ),
            const SizedBox(height: 10),
            const ContainerPersonalizado(
              titulo: '"Imagen de la categoria"',
            ),
            const SizedBox(height: 10),
            const ContainerRedesSociales(),
            const SizedBox(height: 10),
            const ContainerRedesSociales(),
            const SizedBox(height: 10),
            Container(
              width: double.infinity,
              color: Colors.purple[800],
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  children: [
                    Container(
                      height: 50,
                      width: 180,
                      color: Colors.grey,
                      child: const Center(child: Text("Info de Footer")),
                    ),
                    const SizedBox(height: 10),
                    Container(
                        height: 50,
                        width: 180,
                        color: Colors.grey,
                        child: Center(child: Text("Info de Footer"))),
                    const SizedBox(height: 10),
                    Container(
                        height: 20,
                        width: 250,
                        color: Colors.grey,
                        child: const Center(child: Text("Info de Contacto")))
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}

class ContainerRedesSociales extends StatelessWidget {
  const ContainerRedesSociales({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      color: Colors.grey,
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              "Imagen de Moda",
              style: TextStyle(fontSize: 20),
            ),
            const SizedBox(
              height: 20,
            ),
            const Icon(Icons.photo_camera),
            Container(
              child: Padding(
                padding: const EdgeInsets.all(15.0),
                child: Text(
                  "Link a Instagram",
                  style: TextStyle(fontSize: 20),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}

class ContainerPersonalizado extends StatelessWidget {
  final String titulo;
  const ContainerPersonalizado({
    Key? key,
    required this.titulo,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 200,
      width: double.infinity,
      color: Colors.grey,
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              titulo,
              style: TextStyle(fontSize: 20),
            ),
            const SizedBox(
              height: 20,
            ),
            Container(
              color: Colors.white,
              child: const Padding(
                padding: EdgeInsets.all(15.0),
                child: Text(
                  "Link a Categoria",
                  style: TextStyle(fontSize: 20),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
