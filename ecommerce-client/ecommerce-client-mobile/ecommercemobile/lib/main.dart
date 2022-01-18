import 'package:ecommercemobile/provider/login_provider.dart';
import 'package:ecommercemobile/provider/product_provider.dart';
import 'package:ecommercemobile/screens/screens.dart';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(
          create: (_) => LoginFormProvider(),
          lazy: false,
        ),
        ChangeNotifierProvider(create: (_) => ProductProvider())
      ],
      child: MaterialApp(
        title: 'Material App',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primaryColor: Colors.purple,
          elevatedButtonTheme: ElevatedButtonThemeData(
              style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.purple))),
        ),
        initialRoute: "home",
        routes: {
          "login": (_) => Login(),
          "home": (_) => Home(),
          "detail": (_) => Detail(),
          "shop": (_) => Shop(),
          "grid": (_) => GridScreen(),
          "pay": (_) => Pay()
        },
      ),
    );
  }
}
