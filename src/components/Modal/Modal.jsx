import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import Icon from 'components/Icon';
import noImgBg from 'img/No_IMG_BG.png';

import css from './Modal.module.css';
import accent from 'css/utils.module.css';
import MainTags from './components/MainTags';
import extractCarAddress from 'utils/extractCarAddress';
import AccessoriesTags from './components/AccessoriesTags';
import RentalConditionsList from './components/RentalConditionsList';
import mainBtnStyle from 'components/MainBtn/MainBtn.module.css';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ data, onClose }) => {
  const {
    make,
    img,
    model,
    year,
    rentalPrice,
    address,
    accessories,
    mileage,
    description,
    functionalities,
    rentalConditions,
  } = data;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css['overlay']} onClick={onOverlayClick}>
      <div className={css['modal']}>
        <div className={css['modal-container']}>
          <div className={css['img-thumb']}>
            <img
              className={css['img']}
              src={img ? img : noImgBg}
              alt={make}
              loading="lazy"
            />
          </div>
          <p className={css['modal-title']}>
            {`${make} `}
            <span className={accent['text-accent']}>{`${model}`}</span>
            {`, ${year}`}
          </p>
          <MainTags data={{ ...data, address: extractCarAddress(address) }} />
          <p className={css['car-descr']}>{description}</p>
          <p className={css['modal-subtitle']}>
            Accessories and functionalities:
          </p>
          <AccessoriesTags data={{ accessories, functionalities }} />
          <p className={css['modal-subtitle']}>Rental Conditions:</p>
          <RentalConditionsList
            data={{ rentalConditions, mileage, rentalPrice }}
          />

          <a
            href="tel:+380730000000"
            className={`${mainBtnStyle['main-btn']} ${css['modal-btn']}`}
          >
            Rental car
          </a>

          <button className={css['close-btn']}>
            <Icon
              className={css['icon']}
              id={'x-close'}
              onClick={() => onClose()}
            />
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  data: PropTypes.shape({
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
    description: PropTypes.string.isRequired,
    functionalities: PropTypes.array.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
