import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SelectInput from 'components/SelectInput';
import { useGetAllAdvertsQuery } from 'redux/api/advertsAPI';
import { useGetMakesFilterQuery } from 'redux/api/makesFilterAPI';
import { genMakesSelectOpt, genPriceSelectOpt } from 'utils';

import css from './CatalogFilters.module.css';
import priceSelectStyles from 'components/SelectInput/priceSelectStyles';
import makesSelectsStyles from 'components/SelectInput/makesSelectStyles';
import MainBtn from 'components/MainBtn';

const CatalogFilters = ({
  props: { setCurrentPage, handleSearch, currentPage, limit },
}) => {
  const { data: makesData, isLoading } = useGetMakesFilterQuery();
  const { data: allAdverts } = useGetAllAdvertsQuery();

  const [makesDefSelVal, setMakesDefSelVal] = useState('All makers');
  const [priceDefSelVal, setPriceDefSelVal] = useState('To $');
  const [makesSelOpts, setMakesSelOpts] = useState([]);
  const [priceSelOpts, setPriceSelOpts] = useState([]);
  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (makesData && allAdverts) {
      setMakesSelOpts(genMakesSelectOpt(makesData));
      setPriceSelOpts(genPriceSelectOpt(allAdverts));
    }
  }, [allAdverts, makesData, currentPage, limit]);

  useEffect(() => {
    const handleBeforeUnload = event => {
      if (event.clientY < 0) {
        const urlWithoutSearchParams = window.location.pathname;
        navigate(urlWithoutSearchParams);
      }
    };

    window.addEventListener('unload', handleBeforeUnload);

    return () => {
      window.removeEventListener('unload', handleBeforeUnload);
    };
  }, [navigate]);

  const handleSelectChange = selectData => {
    const { name, value } = selectData;
    switch (name) {
      case 'makesCategoty': {
        setMakesDefSelVal(value);
        return;
      }
      case 'priceFilter': {
        setPriceDefSelVal(value);
        return;
      }
      default:
        return;
    }
  };

  const handleInputChahge = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'from': {
        setFromInput(value);
        return;
      }
      case 'to': {
        setToInput(value);
        return;
      }
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setCurrentPage(1);
    handleSearch({
      make: makesDefSelVal,
      rentalPrice: priceDefSelVal,
      from: fromInput,
      to: toInput,
    });
  };

  return (
    <form className={css['form']} autoComplete="off" onSubmit={handleSubmit}>
      <div className={css['form-wrap']}>
        <label className={css['label']}>
          <span className={css['label-txt']}>Car brand</span>
          <SelectInput
            inputName="makesCategoty"
            selectOpt={makesSelOpts}
            handleSelectChange={handleSelectChange}
            defaultValue={makesDefSelVal}
            isLoading={isLoading}
            styles={makesSelectsStyles}
          />
        </label>

        <label className={css['label']}>
          <span className={css['label-txt']}>Price/ 1 hour</span>
          <SelectInput
            inputName="priceFilter"
            selectOpt={priceSelOpts}
            handleSelectChange={handleSelectChange}
            defaultValue={priceDefSelVal}
            isLoading={isLoading}
            styles={priceSelectStyles()}
          />
        </label>

        <div className={css['label']}>
          <label className={css['label-txt']} htmlFor="from">
            Сar mileage / km
          </label>
          <div className={css['inputs-wrap']}>
            <input
              className={`${css['input']} ${css['from']}`}
              placeholder="From"
              type="text"
              name="from"
              value={fromInput}
              onChange={handleInputChahge}
            />

            <input
              className={`${css['input']} ${css['to']}`}
              placeholder="To"
              type="text"
              name="to"
              value={toInput}
              onChange={handleInputChahge}
            />
          </div>
        </div>
      </div>

      <MainBtn type="submit" btnTitle="Search" styles={css['modal-btn']} />
    </form>
  );
};

export default CatalogFilters;

CatalogFilters.propTypes = {
  props: PropTypes.shape({
    setCurrentPage: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
  }).isRequired,
};
