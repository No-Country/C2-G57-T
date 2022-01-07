import 'package:card_swiper/card_swiper.dart';
import 'package:flutter/material.dart';

class Pay extends StatefulWidget {
  Pay({Key? key}) : super(key: key);

  @override
  _PayState createState() => _PayState();
}

class _PayState extends State<Pay> {
  int currentStep = 0;
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

  showAltertaDialog(context) {
    showDialog(
        context: context,
        builder: (context) {
          return const AlertDialog(
              title: Padding(
                padding: EdgeInsets.only(left: 30.0),
                child: Text("Pago realizado enviado"),
              ),
              content: Icon(
                Icons.check_circle,
                color: Colors.purple,
                size: 60.0,
              ));
        });
  }

  @override
  Widget build(BuildContext context) {
    List<Step> listaPasos = [
      Step(
          title: Text("Metodo\nde Pago\t"),
          content: Column(
            children: [
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
          isActive: currentStep >= 0),
      Step(
          title: const Text("Datos de\nTarjeta"),
          content: Column(
            children: [
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
                  )),
            ],
          ),
          isActive: currentStep >= 1),
      Step(
          title: const Text("Transferencia"),
          content: Container(
            padding: const EdgeInsets.all(8.0),
            child:
                Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              TextFormField(
                decoration: InputDecoration(
                    hintText: "CBU/CVU", suffixIcon: Icon(Icons.home)),
              ),
              TextFormField(
                decoration:
                    InputDecoration(hintText: "Numero de Cuil del titular"),
              ),
            ]),
          ),
          isActive: currentStep >= 2)
    ];
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text('Realizar Pago'),
        backgroundColor: Colors.purple,
      ),
      body: Stepper(
          type: StepperType.horizontal,
          currentStep: currentStep,
          onStepContinue: () {
            setState(() {
              if (currentStep < 2) currentStep++;
            });
          },
          onStepCancel: () {
            setState(() {
              if (currentStep > 0) currentStep--;
            });
          },
          controlsBuilder: (context, {onStepCancel, onStepContinue}) {
            return Container(
              margin: const EdgeInsets.only(top: 50),
              child: Row(children: [
                if (currentStep != 2)
                  Expanded(
                    child: ElevatedButton(
                        onPressed: onStepContinue,
                        child: const Text("Siguiente")),
                  ),
                if (currentStep == 2)
                  Expanded(
                    child: ElevatedButton(
                        onPressed: () {
                          showAltertaDialog(context);
                        },
                        child: const Text("Enviar")),
                  ),
                const SizedBox(
                  width: 30.0,
                ),
                if (currentStep != 0)
                  Expanded(
                    child: ElevatedButton(
                        onPressed: onStepCancel, child: const Text("Cancelar")),
                  ),
              ]),
            );
          },
          steps: listaPasos),
    );
  }
}
