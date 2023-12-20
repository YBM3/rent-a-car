import PropTypes from 'prop-types';

import css from 'css/utils.module.css';

const TagsList = ({ data }) => {
  const { carAddress, rentalCompany, type, model, mileage, accessories } = data;

  return (
    <ul className={css['tags-main-list']}>
      <li>
        <ul className={css['card-tags-list']}>
          <li className={css['tags-item']}>
            <p className={css['tag']}>{carAddress[0]}</p>
          </li>

          <li className={css['tags-item']}>
            <p className={css['tag']}>{carAddress[1]}</p>
          </li>

          <li className={css['tags-item']}>
            <p className={css['tag']}>{rentalCompany}</p>
          </li>
        </ul>
      </li>

      <li>
        <ul className={css['card-tags-list']}>
          <li className={css['tags-item']}>
            <p className={css['tag']}>{type}</p>
          </li>

          <li className={css['tags-item']}>
            <p className={css['tag']}>{model}</p>
          </li>

          <li className={css['tags-item']}>
            <p className={css['tag']}>{mileage}</p>
          </li>

          <li className={css['tags-item']}>
            <p className={css['tag']}>{accessories[0]}</p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default TagsList;

TagsList.propTypes = {
  data: PropTypes.shape({
    carAddress: PropTypes.array.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    accessories: PropTypes.array.isRequired,
  }).isRequired,
};
