import PropTypes from 'prop-types';

import css from 'css/utils.module.css';
import modalCss from 'components/Modal/Modal.module.css';

const AccessoriesTags = ({ data }) => {
  const { accessories, functionalities } = data;
  return (
    <ul className={`${css['tags-main-list']} ${modalCss['accessories-tags']}`}>
      <li>
        <ul className={css['tags-list']}>
          {accessories.map(el => (
            <li key={el} className={css['tags-item']}>
              <p>{el}</p>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <ul className={css['tags-list']}>
          {functionalities.map(el => (
            <li key={el} className={css['tags-item']}>
              <p>{el}</p>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default AccessoriesTags;

AccessoriesTags.propTypes = {
  data: PropTypes.shape({
    accessories: PropTypes.array.isRequired,
    functionalities: PropTypes.array.isRequired,
  }).isRequired,
};
