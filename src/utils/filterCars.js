const filterCars = ({
  carsArr,
  make = 'All makers',
  rentalPrice = 'To $',
  from,
  to,
}) => {
  if (make === 'All makers' && rentalPrice === 'To $' && !from && !to) {
    return [...carsArr];
  }

  const filteredCars = carsArr.filter(car => {
    const matchMake = make === 'All makers' || make === car.make;
    const matchRentalPrice =
      rentalPrice === 'To $' ||
      parseInt(rentalPrice) >= parseInt(car.rentalPrice.replace(/\D/g, ''));
    const matchFrom = !from || parseInt(from) <= car.mileage;
    const matchTo = !to || parseInt(to) >= car.mileage;

    return matchMake && matchRentalPrice && matchFrom && matchTo;
  });

  return filteredCars;
};

export default filterCars;
