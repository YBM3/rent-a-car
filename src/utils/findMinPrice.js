const findMinPrice = data => {
  if (data.length === 0) {
    return 0;
  }

  return data.reduce((minPrice, currentPrice) => {
    const currentNumber = parseInt(
      currentPrice['rentalPrice'].replace(/\D/g, '')
    );

    return currentNumber < minPrice ? currentNumber : minPrice;
  }, 100000);
};

export default findMinPrice;
