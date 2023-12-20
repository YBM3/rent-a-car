import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectFavorite } from 'redux/selectors';
import { addToFav, removeFromFav } from 'redux/favorite/favoriteSlice';
import MainBtn from 'components/MainBtn';
import Icon from 'components/Icon';
import TagsList from './components/TagsList';
import noImgBg from 'img/No_IMG_BG.png';

import css from './Card.module.css';
import accent from 'css/utils.module.css';
import Modal from 'components/Modal';
import extractCarAddress from 'utils/extractCarAddress';

const favBtnVariant = {
  CHECKED: 'checked',
  NOT_CHECKED: 'not-checked',
};

const Card = ({ data }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    type,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
    accessories,
  } = data;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorite);

  const [variant, setVariant] = useState(favBtnVariant.NOT_CHECKED);
  const [isAddedToFav, setIsAddedToFav] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);

  const toggleModal = () => setIsModalShow(prev => !prev);

  useEffect(() => {
    if (favorites.length !== 0) {
      setIsAddedToFav(favorites.some(fav => fav.id === id));

      if (isAddedToFav) {
        setVariant(favBtnVariant.CHECKED);
      } else {
        setVariant(favBtnVariant.NOT_CHECKED);
      }
    }
  }, [favorites, id, isAddedToFav]);

  useEffect(() => {
    if (isModalShow) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '10px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isModalShow]);

  const handleOnClickFav = () => {
    dispatch(isAddedToFav ? removeFromFav(data) : addToFav(data));
  };

  return (
    <>
      <div className={css['card']}>
        <div className={css['img-thumb']}>
          <img
            className={css['img']}
            src={img ? img : noImgBg}
            alt={make}
            loading="lazy"
          />
        </div>

        <div className={css['main-descr-wrap']}>
          <p className={css['main-descr']}>
            {`${make} `}
            <span className={accent['text-accent']}>{`${model}`}</span>
            {`, ${year}`}
          </p>

          <p>{rentalPrice}</p>
        </div>

        <TagsList
          data={{
            carAddress: extractCarAddress(address),
            rentalCompany,
            type,
            model,
            mileage,
            accessories,
          }}
        />

        <MainBtn
          btnTitle="Learn more"
          onMainBtnClick={toggleModal}
          styles={css['card-btn']}
        />

        <button onClick={handleOnClickFav} className={css['fav-btn']}>
          <Icon className={`${css['icon']} ${css[variant]}`} id={'heart'} />
        </button>
      </div>
      {isModalShow && <Modal onClose={toggleModal} data={data} />}
    </>
  );
};

export default Card;

Card.propTypes = {
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
  }).isRequired,
};
