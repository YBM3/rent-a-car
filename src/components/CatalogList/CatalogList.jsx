import PropTypes from 'prop-types';
import Card from 'components/Card';

import utilsCss from 'css/utils.module.css';

const CatalogList = ({ carsData }) => {
  return (
    <>
      <ul className={utilsCss['card-list']}>
        {carsData.map(el => (
          <li className={utilsCss['card-list-item']} key={el.id}>
            <Card data={el} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CatalogList;

CatalogList.propTypes = {
  carsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      rentalPrice: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      rentalCompany: PropTypes.string.isRequired,
      mileage: PropTypes.number.isRequired,
      accessories: PropTypes.array.isRequired,
    }).isRequired
  ).isRequired,
};
