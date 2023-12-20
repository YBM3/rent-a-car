import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const SelectInput = ({
  inputName,
  selectOpt,
  handleSelectChange,
  defaultValue,
  isLoading = false,
  styles,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (!defaultValue) {
      setValue(selectOpt[0].label);

      handleSelectChange({
        name: inputName,
        value: selectOpt[0].label,
      });
    }
  }, [selectOpt, defaultValue, handleSelectChange, inputName]);

  const onChange = (data, { name }) => {
    setValue(data.label);

    handleSelectChange({
      name,
      value: data.label,
    });
  };

  return (
    <Select
      name={inputName}
      aria-label={`${inputName} select input`}
      value={{ label: value }}
      isLoading={isLoading}
      onChange={onChange}
      options={selectOpt}
      isSearchable={false}
      styles={styles}
      openMenuOnFocus
    />
  );
};

export default SelectInput;

SelectInput.propTypes = {
  inputName: PropTypes.string.isRequired,
  selectOpt: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  style: PropTypes.object,
};
