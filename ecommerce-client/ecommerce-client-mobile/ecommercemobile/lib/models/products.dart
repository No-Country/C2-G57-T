class Product {
  final String name;
  final int price;
  final String description;
  final String talle1;
  final String talle2;

  final String color1;
  final String color2;
  final String category;
  final String subcategory;
  final String imagen;

  Product(
      {required this.name,
      required this.price,
      required this.description,
      required this.category,
      required this.subcategory,
      required this.imagen,
      required this.talle1,
      required this.talle2,
      required this.color1,
      required this.color2});
}

List<Product> productos = [
  Product(
      name: "pantalon babucha",
      price: 100,
      description: "pantalon jean",
      category: "Ropa Mujer",
      subcategory: "Pantalon",
      imagen: "assets/4.jpg",
      talle1: "XL",
      talle2: "XXL",
      color1: "Negro",
      color2: "Azul"),
  Product(
      name: "Shoggin",
      price: 200,
      description: "pantalon Shoggin",
      category: "Ropa Mujer",
      subcategory: "Pantalon",
      imagen: "assets/5.jpg",
      talle1: "L",
      talle2: "XXL",
      color1: "Verde",
      color2: "Gris"),
  Product(
      name: "Jean",
      price: 500,
      description: "pantalon jean",
      category: "Ropa Mujer",
      subcategory: "Pantalon",
      imagen: "assets/6.jpg",
      talle1: "XL",
      talle2: "XXL",
      color1: "Negro",
      color2: "Azul"),
  Product(
      name: "remera basica",
      price: 100,
      description: "remera  basica",
      category: "Ropa Mujer",
      subcategory: "remera",
      imagen: "assets/7.jpg",
      talle1: "XL",
      talle2: "L",
      color1: "Negro",
      color2: "Gris"),
  Product(
      name: "remera Rock",
      price: 200,
      description: "remera Rock",
      category: "Ropa Mujer",
      subcategory: "remera",
      imagen: "assets/8.jpg",
      talle1: "XL",
      talle2: "L",
      color1: "Blanco",
      color2: "Gris"),
  Product(
      name: "remera blusa",
      price: 100,
      description: "remera  blusa",
      category: "Ropa Mujer",
      subcategory: "remera",
      imagen: "assets/8.jpg",
      talle1: "XL",
      talle2: "L",
      color1: "Negro",
      color2: "Gris"),
];
