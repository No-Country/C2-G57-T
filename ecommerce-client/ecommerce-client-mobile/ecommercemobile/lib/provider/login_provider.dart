import 'package:flutter/cupertino.dart';

class LoginFormProvider extends ChangeNotifier {
  GlobalKey<FormState> formkey = GlobalKey<FormState>();

  bool esValido() {
    return formkey.currentState?.validate() ?? false;
  }
}
