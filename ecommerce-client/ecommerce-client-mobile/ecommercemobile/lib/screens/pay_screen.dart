import 'package:flutter/material.dart';

class Pay extends StatefulWidget {
  Pay({Key? key}) : super(key: key);

  @override
  _PayState createState() => _PayState();
}

class _PayState extends State<Pay> {
  bool recordarTarjeta = true;
  bool tarjetaCredito = true;
  bool transferenciaCbu = true;
  bool mercadoPago = true;
  bool efectivo = true;

  TextStyle textStyle =
      const TextStyle(fontWeight: FontWeight.bold, fontSize: 20);
  TextEditingController nombreController = TextEditingController();
  TextEditingController apellidoController = TextEditingController();
  TextEditingController direccionController = TextEditingController();
  TextEditingController codigoController = TextEditingController();

  @override
  void initState() {
    nombreController = TextEditingController();
    apellidoController = TextEditingController();
    direccionController = TextEditingController();
    codigoController = TextEditingController();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    showAltertaDialog(context) {
      showDialog(
        context: context,
        builder: (context) {
          return const AlertDialog(
            title: Padding(
              padding: EdgeInsets.only(left: 30.0),
              child: Text("Pago realizado"),
            ),
            content: Icon(
              Icons.check_circle,
              color: Colors.purple,
              size: 60.0,
            ),
          );
        },
      );
    }

    return Scaffold(
      backgroundColor: Colors.purple[500],
      appBar: AppBar(
        centerTitle: true,
        title: const Text('Realizar Pago'),
        backgroundColor: Colors.black,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Container(
          alignment: Alignment.center,
          height: 400,
          width: 400,
          color: Colors.white,
          child: PageView(
            controller: PageController(viewportFraction: 0.9),
            scrollDirection: Axis.horizontal,
            children: [
              Container(
                height: 300,
                width: 300,
                child: Column(
                  children: [
                    ListTile(
                      title: Text("Selecciona tu metodo de pago"),
                      trailing: Container(
                          height: 30,
                          width: 30,
                          color: Colors.red,
                          child: Icon(Icons.navigate_next_rounded)),
                    ),
                    CheckboxListTile(
                      activeColor: Colors.purple,
                      value: tarjetaCredito,
                      onChanged: (val) {
                        setState(() {});
                        tarjetaCredito = val ?? false;
                      },
                      title: Text("Tarjeta de Credito"),
                    ),
                    CheckboxListTile(
                      activeColor: Colors.purple,
                      value: transferenciaCbu,
                      onChanged: (val) {
                        setState(() {});
                        transferenciaCbu = val ?? false;
                      },
                      title: Text("Transferencia CBU"),
                    ),
                    CheckboxListTile(
                      activeColor: Colors.purple,
                      value: mercadoPago,
                      onChanged: (val) {
                        setState(() {});
                        mercadoPago = val ?? false;
                      },
                      title: Text("Mercado Pago"),
                    ),
                    CheckboxListTile(
                      activeColor: Colors.purple,
                      value: efectivo,
                      onChanged: (val) {
                        setState(() {});
                        efectivo = val ?? false;
                      },
                      title: Text("Efectivo"),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(15.0),
                child: Column(
                  children: [
                    Text("Datos de Tarjeta"),
                    TextField(
                      controller: direccionController,
                      decoration: const InputDecoration(
                          hintText: "Numero de tarjeta",
                          suffixIcon: Icon(Icons.credit_score_outlined)),
                    ),
                    ListTile(
                      title: Container(
                        height: 40,
                        width: 100,
                        child: TextField(
                          controller: codigoController,
                          decoration: const InputDecoration(
                            hintText: "Cod de Seg",
                          ),
                        ),
                      ),
                      leading: Container(
                        height: 40,
                        width: 150,
                        child: TextField(
                          controller: codigoController,
                          decoration: const InputDecoration(
                            hintText: "Fecha de Venc",
                          ),
                        ),
                      ),
                    ),
                    ListTile(
                      leading: Checkbox(
                          activeColor: Colors.grey,
                          value: recordarTarjeta,
                          onChanged: (valor) {
                            recordarTarjeta = valor ?? false;
                            setState(() {});
                          }),
                      title: const Text(
                        "Recordar Tarjeta",
                        style: TextStyle(fontSize: 14),
                      ),
                    ),
                    SizedBox(
                      height: 30,
                    ),
                    ElevatedButton(
                        onPressed: () {}, child: Text("Realizar Pago"))
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    TextFormField(
                      decoration: InputDecoration(
                          hintText: "CBU/CVU", suffixIcon: Icon(Icons.home)),
                    ),
                    TextFormField(
                      decoration: InputDecoration(
                          hintText: "Numero de Cuil del titular"),
                    ),
                    SizedBox(
                      height: 30,
                    ),
                    Align(
                      alignment: Alignment.center,
                      child: ElevatedButton(
                          onPressed: () {}, child: Text("Realizar Pago")),
                    )
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
