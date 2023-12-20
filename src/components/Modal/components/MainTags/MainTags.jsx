import PropTypes from 'prop-types';

import css from 'css/utils.module.css';
import modalCss from 'components/Modal/Modal.module.css';

const MainTags = ({ data }) => {
  const { address, id, year, type, fuelConsumption, engineSize } = data;
  return (
    <ul className={`${css['tags-main-list']} ${modalCss['main-tags']}`}>
      <li>
        <ul className={css['tags-list']}>
          <li className={css['tags-item']}>
            <p>{address[0]}</p>
          </li>

          <li className={css['tags-item']}>
            <p>{address[1]}</p>
          </li>

          <li className={css['tags-item']}>
            <p>Id: {id}</p>
          </li>

          <li className={css['tags-item']}>
            <p>Year: {year}</p>
          </li>

          <li className={css['tags-item']}>
            <p>Type: {type}</p>
          </li>
        </ul>
      </li>

      <li>
        <ul className={css['tags-list']}>
          <li className={css['tags-item']}>
            <p>Fuel Consumption: {fuelConsumption}</p>
          </li>

          <li className={css['tags-item']}>
            <p>Engine Size: {engineSize}</p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default MainTags;

MainTags.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
  }).isRequired,
};
