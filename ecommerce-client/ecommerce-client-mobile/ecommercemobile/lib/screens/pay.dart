import 'package:card_swiper/card_swiper.dart';
import 'package:flutter/material.dart';

class Pay extends StatefulWidget {
  Pay({Key? key}) : super(key: key);

  @override
  _PayState createState() => _PayState();
}

class _PayState extends State<Pay> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(
          width: double.infinity,
          height: 300,
          color: Colors.grey,
        ),
      ),
    );
  }
}
