import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import css from './RentalConditionsList.module.css';
import accent from 'css/utils.module.css';

const RentalConditionsList = ({
  data: { rentalConditions, mileage, rentalPrice },
}) => {
  const [conditionsArr, setConditionsArr] = useState([]);
  useEffect(() => {
    setConditionsArr(rentalConditions.split('\n'));
  }, [rentalConditions]);

  return (
    <ul className={css['conditions-list']}>
      {conditionsArr.map(el => {
        if (el.includes('Minimum age:')) {
          const age = parseInt(el.replace(/\D/g, ''));
          return (
            <li key={el} className={css['conditions-item']}>
              <p>
                Minimum age:{' '}
                <span
                  className={`${accent['text-accent']} ${css['text-accent']}`}
                >
                  {age}
                </span>
              </p>
            </li>
          );
        }
        return (
          <li key={el} className={css['conditions-item']}>
            <p>{el}</p>
          </li>
        );
      })}

      <li className={css['conditions-item']}>
        <p>
          Mileage:{' '}
          <span className={`${accent['text-accent']} ${css['text-accent']}`}>
            {mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </p>
      </li>

      <li className={css['conditions-item']}>
        <p>
          Price:{' '}
          <span className={`${accent['text-accent']} ${css['text-accent']}`}>
            {rentalPrice}
          </span>
        </p>
      </li>
    </ul>
  );
};

export default RentalConditionsList;

RentalConditionsList.propTypes = {
  data: PropTypes.shape({
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
  }).isRequired,
};
