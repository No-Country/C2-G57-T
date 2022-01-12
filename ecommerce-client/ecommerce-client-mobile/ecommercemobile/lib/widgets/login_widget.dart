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
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;
    return Container(
      child: Column(
        children: [
          TexfieldPersonalizado(
            icono: Icons.alternate_email,
            titulo: 'Email',
            controller: emailController2,
          ),
          TexfieldPersonalizado(
            icono: Icons.lock,
            titulo: "Contraseña",
            controller: contrasenia2,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  Checkbox(
                      activeColor: Colors.grey,
                      value: activar,
                      onChanged: (valor) {
                        activar = valor ?? false;
                        setState(() {});
                      }),
                  Text(
                    "Recordar",
                    style: TextStyle(fontSize: height * 0.02),
                  ),
                ],
              ),
              Text(
                "Olvidaste tu contraseña?",
                maxLines: 4,
                style: TextStyle(fontSize: height * 0.015),
              )
            ],
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
