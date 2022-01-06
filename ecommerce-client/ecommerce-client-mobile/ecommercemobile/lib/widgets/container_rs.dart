import 'package:flutter/material.dart';

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
