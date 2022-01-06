import 'package:flutter/material.dart';

class RegisterWidget extends StatefulWidget {
  RegisterWidget({Key? key}) : super(key: key);

  @override
  State<RegisterWidget> createState() => _RegisterWidgetState();
}

class _RegisterWidgetState extends State<RegisterWidget> {
  bool activar = true;
  bool activar2 = true;

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
          ListTile(
            leading: Checkbox(
                activeColor: Colors.grey,
                value: activar,
                onChanged: (valor) {
                  activar = valor ?? false;
                  setState(() {});
                }),
            title: Text(
              "Terminos y Condiciones",
              style: TextStyle(fontSize: 14),
            ),
          ),
          ListTile(
            leading: Checkbox(
                activeColor: Colors.grey,
                value: activar2,
                onChanged: (valor) {
                  activar2 = valor ?? false;
                  setState(() {});
                }),
            title: Text(
              "Quiero recibir noticias",
              style: TextStyle(fontSize: 14),
            ),
          ),
          ElevatedButton(
              style: ElevatedButton.styleFrom(primary: Colors.grey),
              onPressed: () {},
              child: Text("Registrarme"))
        ],
      ),
    );
  }
}
