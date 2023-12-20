import PropTypes from 'prop-types';

import css from './NoContentComponent.module.css';

const NoContentComponent = ({ noContMess }) => {
  return (
    <div className={css['no-cont-wrap']}>
      <div className={css['no-cont-img']}></div>
      <p className={css['no-cont-txt']}>{noContMess}</p>
    </div>
  );
};

export default NoContentComponent;

NoContentComponent.propTypes = {
  noContMess: PropTypes.string.isRequired,
};
