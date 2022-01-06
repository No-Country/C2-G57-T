import 'package:ecommercemobile/provider/login_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class RegisterWidgetProvider extends StatefulWidget {
  RegisterWidgetProvider({Key? key}) : super(key: key);

  @override
  _RegisterWidgetProviderState createState() => _RegisterWidgetProviderState();
}

class _RegisterWidgetProviderState extends State<RegisterWidgetProvider> {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => LoginFormProvider(),
      child: RegisterWidget(),
    );
  }
}

class RegisterWidget extends StatefulWidget {
  RegisterWidget({Key? key}) : super(key: key);

  @override
  State<RegisterWidget> createState() => _RegisterWidgetState();
}

class _RegisterWidgetState extends State<RegisterWidget> {
  bool activar = true;
  bool activar2 = true;
  late TextEditingController contraseniaController;
  late TextEditingController emailController;
  late TextEditingController nombreController;
  late TextEditingController ciudadContoller;
  late TextEditingController direccionController;
  late TextEditingController codigopostalController;

  @override
  void initState() {
    super.initState();
    contraseniaController = TextEditingController();
    emailController = TextEditingController();
    nombreController = TextEditingController();
    ciudadContoller = TextEditingController();
    direccionController = TextEditingController();
    codigopostalController = TextEditingController();
  }

  @override
  Widget build(BuildContext context) {
    final loginFormProvider = Provider.of<LoginFormProvider>(context);
    return Container(
      child: Form(
        key: loginFormProvider.formkey,
        autovalidateMode: AutovalidateMode.onUserInteraction,
        child: Column(
          children: [
            TextFormField(
              keyboardType: TextInputType.emailAddress,
              validator: (val) {
                if (val?.contains("@") ?? false) {
                  return null;
                }
                return "No es un correro";
              },
              decoration: const InputDecoration(
                hintText: "Email",
                contentPadding: EdgeInsets.all(30),
              ),
            ),
            TexfieldPersonalizado(
              controller: nombreController,
              titulo: 'Nombre de usuario',
            ),
            TextFormField(
              controller: contraseniaController,
              obscureText: true,
              validator: (val) {
                if (val != null && val.length > 6) {
                  contraseniaController.text = val;
                  return null;
                }
                return "La contraseña debe tener mas de 6 caracteres";
              },
              decoration: const InputDecoration(
                hintText: "Contraseña",
                contentPadding: EdgeInsets.all(30),
              ),
            ),
            TextFormField(
              obscureText: true,
              validator: (val) {
                if (contraseniaController.text == val) {
                  return null;
                }
                return "La contraseña no es igual, repita la misma";
              },
              decoration: const InputDecoration(
                hintText: "Repetir Contraseña",
                contentPadding: EdgeInsets.all(30),
              ),
            ),
            TexfieldPersonalizado(
              controller: ciudadContoller,
              titulo: 'Ciudad',
            ),
            TexfieldPersonalizado(
              controller: direccionController,
              titulo: 'Direccion',
            ),
            TexfieldPersonalizado(
              controller: codigopostalController,
              titulo: 'Codigo Postal',
            ),
            ListTile(
              leading: Checkbox(
                  activeColor: Colors.grey,
                  value: activar,
                  onChanged: (valor) {
                    activar = valor ?? false;
                    setState(() {});
                  }),
              title: const Text(
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
              title: const Text(
                "Quiero recibir noticias",
                style: TextStyle(fontSize: 14),
              ),
            ),
            ElevatedButton(
                style: ElevatedButton.styleFrom(primary: Colors.grey),
                onPressed: () {
                  loginFormProvider.esValido();
                  print(emailController.text +
                      nombreController.text +
                      contraseniaController.text +
                      ciudadContoller.text +
                      direccionController.text);
                  FocusScope.of(context).unfocus();
                },
                child: Text("Registrarme"))
          ],
        ),
      ),
    );
  }
}

class TexfieldPersonalizado extends StatelessWidget {
  TexfieldPersonalizado({
    Key? key,
    required this.titulo,
    required this.controller,
  }) : super(key: key);

  final String titulo;
  final TextEditingController controller;

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controller,
      decoration: InputDecoration(
        hintText: titulo,
        contentPadding: EdgeInsets.all(30),
      ),
    );
  }
}
