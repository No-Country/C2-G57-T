import 'dart:convert';

List<Producto> respuestaFromMap(String str) =>
    List<Producto>.from(json.decode(str).map((x) => Producto.fromMap(x)));

String respuestaToMap(List<Producto> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toMap())));

class Producto {
  Producto({
    this.id,
    this.name,
    this.price,
    this.description,
    this.img,
    this.talle,
    this.stock,
    this.destacado,
    this.discount,
    this.color,
    this.user,
    this.category,
    this.subcategory,
  });

  String? id;
  String? name;
  int? price;
  String? description;
  List<Img>? img;
  List<String>? talle;
  bool? stock;
  bool? destacado;
  int? discount;
  List<dynamic>? color;
  String? user;
  String? category;
  String? subcategory;

  factory Producto.fromMap(Map<String, dynamic> json) => Producto(
        id: json["_id"] == null ? null : json["_id"],
        name: json["name"] == null ? null : json["name"],
        price: json["price"] == null ? null : json["price"],
        description: json["description"] == null ? null : json["description"],
        img: json["img"] == null
            ? null
            : List<Img>.from(json["img"].map((x) => Img.fromMap(x))),
        talle: json["talle"] == null
            ? null
            : List<String>.from(json["talle"].map((x) => x)),
        stock: json["stock"] == null ? null : json["stock"],
        destacado: json["destacado"] == null ? null : json["destacado"],
        discount: json["discount"] == null ? null : json["discount"],
        category: json["category"] == null ? null : json["category"],
        subcategory: json["subcategory"] == null ? null : json["subcategory"],
      );

  Map<String, dynamic> toMap() => {
        "_id": id == null ? null : id,
        "name": name == null ? null : name,
        "price": price == null ? null : price,
        "description": description == null ? null : description,
        "img":
            img == null ? null : List<dynamic>.from(img!.map((x) => x.toMap())),
        "talle":
            talle == null ? null : List<dynamic>.from(talle!.map((x) => x)),
        "stock": stock == null ? null : stock,
        "destacado": destacado == null ? null : destacado,
        "discount": discount == null ? null : discount,
        "category": category == null ? null : category,
        "subcategory": subcategory == null ? null : subcategory,
      };
}

enum Category { PANT, DRESS, T_SHIRT, SKIRT }

class Img {
  Img({
    required this.url,
    required this.id,
  });

  String url;
  String id;

  factory Img.fromMap(Map<String, dynamic> json) => Img(
        url: json["url"] == null ? null : json["url"],
        id: json["_id"] == null ? null : json["_id"],
      );

  Map<String, dynamic> toMap() => {
        "url": url == null ? null : url,
        "_id": id == null ? null : id,
      };
}
