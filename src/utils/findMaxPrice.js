const findMaxPrice = data => {
  if (data.length === 0) {
    return 0;
  }

  return data.reduce((maxPrice, currentPrice) => {
    const currentNumber = parseInt(
      currentPrice['rentalPrice'].replace(/\D/g, '')
    );

    return currentNumber > maxPrice ? currentNumber : maxPrice;
  }, 0);
};

export default findMaxPrice;
