import 'package:ecommercemobile/widgets/login_widget.dart';
import 'package:ecommercemobile/widgets/register_widget.dart';
import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  Login({Key? key}) : super(key: key);

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  bool activar = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.purple[200],
      body: Padding(
        padding: const EdgeInsets.all(15.0),
        child: SafeArea(
          child: Container(
            width: double.infinity,
            color: Colors.white,
            child: Padding(
              padding: const EdgeInsets.all(25.0),
              child: SingleChildScrollView(
                child: Column(
                  children: [
                    Row(
                      children: [
                        Container(
                          child: TextButton(
                              onPressed: () {
                                activar = false;
                                setState(() {});
                              },
                              child: Text("Ingresar",
                                  style: TextStyle(
                                    color: Colors.black,
                                    fontSize: 30,
                                  ))),
                        ),
                        Container(
                          height: 50,
                          child: TextButton(
                            onPressed: () {
                              activar = true;
                              setState(() {});
                            },
                            child: Text("Registro",
                                style: TextStyle(
                                  color: Colors.black,
                                  fontSize: 30,
                                )),
                          ),
                        ),
                      ],
                    ),
                    activar ? RegisterWidget() : LoginWidget(),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
