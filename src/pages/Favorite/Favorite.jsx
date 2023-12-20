import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectFavorite } from 'redux/selectors';
import { paginateCars, scrollSmooth } from 'utils';
import FavoriteList from 'components/FavoriteList';
import MainBtn from 'components/MainBtn';
import NoContentComponent from 'components/NoContentComponent';

import css from 'css/utils.module.css';

const Favotite = () => {
  const favorites = useSelector(selectFavorite);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (!favorites) {
      return;
    }

    setLimit(12);

    const paginatedCars = paginateCars({
      arr: favorites,
      limit,
      currentPage,
    });
    setCars(paginatedCars);
    setTotalPages(Math.ceil(favorites.length / limit));
  }, [favorites, currentPage, limit]);

  useEffect(() => {
    scrollSmooth({ arr: cars, limit });
  }, [cars, limit]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {cars.length !== 0 ? (
        <FavoriteList favCards={cars} />
      ) : (
        <NoContentComponent noContMess={'Sorry, your favorite list is empty'} />
      )}

      {currentPage < totalPages && (
        <MainBtn
          className={css['load-btn']}
          onMainBtnClick={handleLoadMore}
          btnTitle="Load More"
          styles={css['load-btn']}
        />
      )}
    </>
  );
};

export default Favotite;
