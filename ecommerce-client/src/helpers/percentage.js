export const off = (price, discount) => {
  const percentage = Math.floor(price * discount) / 100;    
  const priceEnd = price - percentage;    
  
  return priceEnd
};