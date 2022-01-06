import 'package:flutter/material.dart';

class RegisterWidget extends StatelessWidget {
  const RegisterWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          TextField(
            decoration: InputDecoration(
              hintText: "Email",
              contentPadding: EdgeInsets.all(30),
            ),
          ),
          TextField(
            decoration: InputDecoration(
              hintText: "Nombre de usuario",
              contentPadding: EdgeInsets.all(30),
            ),
          ),
          TextField(
            decoration: InputDecoration(
              hintText: "Contraseña",
              contentPadding: EdgeInsets.all(30),
            ),
          ),
          TextField(
            decoration: InputDecoration(
              hintText: "Repetir contraseña",
              contentPadding: EdgeInsets.all(30),
            ),
          ),
          TextField(
            decoration: InputDecoration(
              hintText: "Ciudad",
              contentPadding: EdgeInsets.all(30),
            ),
          ),
          TextField(
            decoration: InputDecoration(
              hintText: "Direccion",
              contentPadding: EdgeInsets.all(30),
            ),
          ),
          TextField(
            decoration: InputDecoration(
              hintText: "Codigo Postal",
              contentPadding: EdgeInsets.all(30),
            ),
          ),
        ],
      ),
    );
  }
}
