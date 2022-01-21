
//Cambia el select hijo segun la opcion del padre
export const sendSubtype = (values) => {
    switch (values.category) {
      case "t-shirt":
        return [{ id: 1, sub: ["Con Mangas", "Sin Mangas"] }];
      case "skirt":
        return [{ id: 2, sub: ["Cortas", "Largas"] }];

      case "dress":
        return [
          {
            id: 3,
            sub: ["De dia", "De noche"],
          },
        ];

      case "pant":
        return [
          {
            id: 3,
            sub: ["Jeans", "Calzas"],
          },
        ];

      default:
        break;
    }
  };