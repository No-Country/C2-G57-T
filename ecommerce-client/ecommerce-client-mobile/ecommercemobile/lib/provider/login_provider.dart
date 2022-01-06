import 'package:flutter/cupertino.dart';

class LoginFormProvider extends ChangeNotifier {
  GlobalKey<FormState> formkey = GlobalKey<FormState>();

  bool esValido() {
    bool esValido = formkey.currentState?.validate() ?? false;
    print(esValido);
    return esValido;
  }
}
