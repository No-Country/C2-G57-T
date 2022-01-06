import 'package:ecommercemobile/home.dart';
import 'package:ecommercemobile/login.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      debugShowCheckedModeBanner: false,
      initialRoute: "login",
      routes: {"login": (_) => Login(), "home": (_) => Home()},
    );
  }
}
