import 'package:flutter/material.dart';

class FooterPersonalizado extends StatelessWidget {
  const FooterPersonalizado({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 80,
      width: double.infinity,
      color: Colors.purple[800],
      child: Padding(
        padding: const EdgeInsets.all(5.0),
        child: Column(
          children: [
            Container(
              width: 200,
              color: Colors.grey,
              child: const Center(child: Text("Info de Footer")),
            ),
            const SizedBox(height: 10),
            Container(
                width: 200,
                color: Colors.grey,
                child: Center(child: Text("Info de Footer"))),
            const SizedBox(height: 10),
            Container(
                width: 250,
                color: Colors.grey,
                child: const Center(child: Text("Info de Contacto")))
          ],
        ),
      ),
    );
  }
}
