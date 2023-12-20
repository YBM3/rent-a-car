import findMaxPrice from './findMaxPrice';
import findMinPrice from './findMinPrice';

const ROUND_TO = 10;

const genPriceSelectOpt = data => {
  const maxPrice =
    Math.ceil((findMaxPrice(data) - ROUND_TO) / ROUND_TO) * ROUND_TO + ROUND_TO;
  const minPrice =
    Math.ceil((findMinPrice(data) - ROUND_TO) / ROUND_TO) * ROUND_TO + ROUND_TO;

  const result = [];

  for (let i = minPrice; i <= maxPrice; i += 10) {
    result.push({ value: `${i}`, label: `${i}` });
  }

  return [{ label: 'To $' }, ...result];
};

export default genPriceSelectOpt;
