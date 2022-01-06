import 'package:flutter/material.dart';

class LoginWidget extends StatefulWidget {
  LoginWidget({Key? key}) : super(key: key);

  @override
  State<LoginWidget> createState() => _LoginWidgetState();
}

class _LoginWidgetState extends State<LoginWidget> {
  bool activar = true;

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
              hintText: "Contraseña",
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
              "Recordar",
              style: TextStyle(fontSize: 14),
            ),
            trailing: Text(
              "Olvidaste tu contraseña?",
              style: TextStyle(fontSize: 13),
            ),
          ),
          ElevatedButton(
              style: ElevatedButton.styleFrom(primary: Colors.grey),
              onPressed: () {},
              child: Text("Ingresar"))
        ],
      ),
    );
  }
}
