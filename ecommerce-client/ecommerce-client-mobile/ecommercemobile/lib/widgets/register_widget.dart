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
              controller: emailController,
              validator: (val) {
                if (val?.contains("@") ?? false) {
                  return null;
                }
                return "No es un correro";
              },
              decoration: const InputDecoration(
                prefixIcon: Icon(Icons.alternate_email_outlined),
                hintText: "Email",
                contentPadding: EdgeInsets.all(20),
              ),
            ),
            TexfieldPersonalizado(
              icono: Icons.accessibility_rounded,
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
                prefixIcon: Icon(Icons.lock),
                hintText: "Contraseña",
                contentPadding: EdgeInsets.all(20),
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
                prefixIcon: Icon(Icons.lock),
                hintText: "Repetir Contraseña",
                contentPadding: EdgeInsets.all(30),
              ),
            ),
            TexfieldPersonalizado(
              icono: Icons.maps_home_work_outlined,
              controller: ciudadContoller,
              titulo: 'Ciudad',
            ),
            TexfieldPersonalizado(
              icono: Icons.add_circle_sharp,
              controller: direccionController,
              titulo: 'Direccion',
            ),
            TexfieldPersonalizado(
              icono: Icons.email,
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
                style: ElevatedButton.styleFrom(
                    primary: loginFormProvider.esValido()
                        ? Colors.grey
                        : Colors.blue),
                onPressed: () {
                  if (loginFormProvider.esValido()) {
                    FocusScope.of(context).unfocus();
                    Navigator.of(context).pushReplacementNamed("home");
                    Future.delayed(Duration(seconds: 5));
                  }
                  print(
                      "${contraseniaController.text},${emailController.text},${nombreController.text}");
                },
                child: Text(
                    loginFormProvider.esValido() ? "Espere" : "Registrarme"))
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
    required this.icono,
  }) : super(key: key);

  final String titulo;
  final TextEditingController controller;
  final IconData icono;

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controller,
      decoration: InputDecoration(
        hintMaxLines: 2,
        prefixIcon: Icon(icono),
        hintText: titulo,
        hintStyle: TextStyle(overflow: TextOverflow.ellipsis),
        contentPadding: EdgeInsets.all(30),
      ),
    );
  }
}
