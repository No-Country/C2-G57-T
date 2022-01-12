import 'package:ecommercemobile/widgets/widget.dart';
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
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;

    return Scaffold(
      backgroundColor: Colors.purple[200],
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(15.0),
          child: SafeArea(
            child: Container(
              width: width * 0.7,
              height: height * 0.7,
              color: Colors.white,
              child: Padding(
                padding: const EdgeInsets.all(25.0),
                child: SingleChildScrollView(
                  child: Column(
                    children: [
                      Row(
                        children: [
                          Expanded(
                            child: Container(
                              color: activar ? Colors.grey : Colors.white,
                              child: TextButton(
                                  onPressed: () {
                                    activar = false;
                                    setState(() {});
                                  },
                                  child: Text("Ingresar",
                                      style: TextStyle(
                                        color: Colors.black,
                                        fontSize: 20,
                                      ))),
                            ),
                          ),
                          Expanded(
                            child: Container(
                              color: activar ? Colors.white : Colors.grey,
                              child: TextButton(
                                onPressed: () {
                                  activar = true;
                                  setState(() {});
                                },
                                child: Text("Registro",
                                    style: TextStyle(
                                      color: Colors.black,
                                      fontSize: 20,
                                    )),
                              ),
                            ),
                          ),
                        ],
                      ),
                      activar ? RegisterWidgetProvider() : LoginWidget(),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
