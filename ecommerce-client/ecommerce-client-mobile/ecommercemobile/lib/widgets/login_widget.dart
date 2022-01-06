import 'package:ecommercemobile/widgets/register_widget.dart';
import 'package:flutter/material.dart';

class LoginWidget extends StatefulWidget {
  LoginWidget({Key? key}) : super(key: key);

  @override
  State<LoginWidget> createState() => _LoginWidgetState();
}

class _LoginWidgetState extends State<LoginWidget> {
  bool activar = true;
  late TextEditingController emailController2;
  late TextEditingController contrasenia2;

  @override
  void initState() {
    emailController2 = TextEditingController();
    contrasenia2 = TextEditingController();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          TexfieldPersonalizado(
            titulo: 'Email',
            controller: emailController2,
          ),
          TexfieldPersonalizado(
            titulo: "Contraseña",
            controller: contrasenia2,
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
