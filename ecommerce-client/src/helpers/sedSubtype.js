export const sendSubtype = (values) => {
    switch (values.type) {
      case "t-shirt":
        return [{ id: 1, sub: ["Con Mangas", "Sin Magas", "Manga Larga"] }];
      case "skirts":
        return [{ id: 2, sub: ["Cortas", "Largas"] }];

      case "dresses":
        return [
          {
            id: 3,
            sub: ["De dia", "De noche"],
          },
        ];

      case "pants":
        return [
          {
            id: 3,
            sub: ["Jeans", "De Morley"],
          },
        ];

      default:
        break;
    }
  };