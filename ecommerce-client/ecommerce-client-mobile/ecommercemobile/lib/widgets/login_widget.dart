import 'package:flutter/material.dart';

class LoginWidget extends StatelessWidget {
  const LoginWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      TextField(
        decoration: InputDecoration(
          hintText: "Email",
          contentPadding: EdgeInsets.all(30),
        ),
      ),
      TextField(
        decoration: InputDecoration(
          hintText: "Contraseña",
          contentPadding: EdgeInsets.all(30),
        ),
      ),
    ]);
  }
}
