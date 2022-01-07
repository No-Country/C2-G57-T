import 'package:flutter/material.dart';

class ContainerPersonalizado extends StatelessWidget {
  final String titulo;
  const ContainerPersonalizado({
    Key? key,
    required this.titulo,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 400,
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
            // Container(
            //   color: Colors.white,
            //   child: const Padding(
            //     padding: EdgeInsets.all(15.0),
            //     child: Text(
            //       "Link a Categoria",
            //       style: TextStyle(fontSize: 20),
            //     ),
            //   ),
            // )

            //FadeInImage(placeholder: placeholder, image: image)
          ],
        ),
      ),
    );
  }
}
