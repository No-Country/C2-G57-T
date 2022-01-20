import 'package:ecommercemobile/widgets/widget.dart';
import 'package:flutter/material.dart';

class FooterPersonalizado extends StatelessWidget {
  const FooterPersonalizado({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 25,
      width: double.infinity,
      color: Colors.purple[800],
      child: Padding(
        padding: const EdgeInsets.all(5.0),
        child: Column(
          children: [
            SizedBox(height: 10),
            ContainerRedesSociales(
                imagenAssets: '17', icono: Icons.photo_camera_sharp),
            SizedBox(height: 10),
            ContainerRedesSociales(
                imagenAssets: '18', icono: Icons.local_parking_outlined),
          ],
        ),
      ),
    );
  }
}
