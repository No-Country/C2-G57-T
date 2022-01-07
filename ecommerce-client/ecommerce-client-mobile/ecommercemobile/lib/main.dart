import 'package:ecommercemobile/screens/screens.dart';

import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      debugShowCheckedModeBanner: false,
      initialRoute: "pay",
      routes: {
        "login": (_) => Login(),
        "home": (_) => Home(),
        "detail": (_) => Detail(),
        "shop": (_) => Shop(),
        "grid": (_) => GridScreen(),
        "pay": (_) => Pay()
      },
    );
  }
}
