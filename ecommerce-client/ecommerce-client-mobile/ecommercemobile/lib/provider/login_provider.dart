import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class LoginFormProvider extends ChangeNotifier {
  GlobalKey<FormState> formkey = GlobalKey<FormState>();
  String name = "";
  String email = "";
  String password = "";

  bool esValido() {
    bool esValido = formkey.currentState?.validate() ?? false;

    return esValido;
  }

  Future createUser(Map user) async {
    final url = Uri.http("localhost:8080/", "api/user");

    final respuesta = await http.post(url, body: user);
  }
}
