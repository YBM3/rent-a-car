import PropTypes from 'prop-types';

import css from './MainBtn.module.css';

const MainBtn = ({
  btnTitle,
  onMainBtnClick = () => {},
  styles = '',
  type = 'button',
}) => {
  return (
    <button
      className={`${css['main-btn']} ${styles}`}
      type={type}
      onClick={() => onMainBtnClick()}
    >
      {btnTitle}
    </button>
  );
};

export default MainBtn;

MainBtn.propTypes = {
  btnTitle: PropTypes.string.isRequired,
  onMainBtnClick: PropTypes.func,
  styles: PropTypes.string,
  type: PropTypes.string,
};
