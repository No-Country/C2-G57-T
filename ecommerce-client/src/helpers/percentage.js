const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export const off = (price, discount) => {
    const percentage = Math.floor(price * discount) / 100;    
    const priceEnd = price - percentage;    
    return <h3>${toThousand(priceEnd)} ARS</h3>;
  };