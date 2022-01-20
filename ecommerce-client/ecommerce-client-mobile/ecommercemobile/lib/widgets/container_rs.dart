import 'package:flutter/material.dart';

class ContainerRedesSociales extends StatelessWidget {
  const ContainerRedesSociales({
    Key? key,
    required this.imagenAssets,
    required this.icono,
  }) : super(key: key);

  final String imagenAssets;
  final IconData icono;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10.0),
      child: Center(
        child: Container(
          width: double.infinity,
          child: Stack(
            children: [
              Container(
                width: double.infinity,
                child: FadeInImage(
                  placeholder: AssetImage("assets/loading.gif"),
                  image: AssetImage("assets/${imagenAssets}.jpg"),
                  height: 50,
                  fit: BoxFit.cover,
                ),
              ),
              Center(
                child: Container(
                  height: 20,
                  width: 150,
                  alignment: Alignment.center,
                  child: Icon(icono, size: 50, color: Colors.white),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
