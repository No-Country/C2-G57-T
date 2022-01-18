import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class LoginFormProvider extends ChangeNotifier {
  GlobalKey<FormState> formkey = GlobalKey<FormState>();
  String _name = "";
  String _email = "";
  String _password = "";

  String get name => _name;
  String get email => _email;
  String get password => _password;

  set email(String email) {
    _email = email;
    notifyListeners();
  }

  set name(String name) {
    _name = name;
    notifyListeners();
  }

  set password(String password) {
    _password = password;
    notifyListeners();
  }

  bool esValido() {
    bool esValido = formkey.currentState?.validate() ?? false;

    return esValido;
  }

  // Future createUser(Map user) async {
  //   final url = Uri.http("localhost:8080/", "api/user");

  //   final respuesta = await http.post(url, body: user);
  // }

}
