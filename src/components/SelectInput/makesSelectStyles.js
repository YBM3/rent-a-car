const makesSelectsStyles = {
  container: baseStyles => ({
    ...baseStyles,
    display: 'inline-block',
  }),
  control: baseStyles => ({
    ...baseStyles,
    minHeight: '40px',
    height: '40px',
    with: '100%',
    backgroundColor: 'var(--select-bg-cl)',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    padding: '0 18px',
    '@media screen and (min-width: 768px)': {
      ...baseStyles['@media screen and (min-width: 768px)'],
      height: '48px',
      minWidth: '230px',
      borderRadius: '14px',
      padding: '0 18px',
    },
  }),
  dropdownIndicator: (baseStyles, { selectProps }) => ({
    ...baseStyles,
    padding: 0,
    transform: selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
    color: 'var(--secondary-txt-cl)',
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: 0,
  }),
  input: baseStyles => ({
    ...baseStyles,
    padding: 0,
    margin: 0,
    height: 0,
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    padding: 0,
    marginLeft: 0,
    color: 'var(--secondary-txt-cl)',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '1.11',
    overflow: 'visible',
    '@media screen and (min-width: 768px)': {
      ...baseStyles['@media screen and (min-width: 768px)'],
      marginRight: '30px',
      fontSize: '18px',
    },
  }),
  menu: baseStyles => ({
    ...baseStyles,
    top: 45,
    right: 0,

    padding: '7px 2px 7px 10px',
    margin: 0,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '1.25',
    color: 'var(--tags-txt-cl)',
    borderRadius: '10px',
    backgroundColor: 'var(--select-bg-cl)',
    '@media screen and (min-width: 768px)': {
      ...baseStyles['@media screen and (min-width: 768px)'],
      top: 55,
      padding: '14px 10px 14px 18px',
      fontSize: '18px',
      borderRadius: '14px',
    },
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    padding: 0,
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#434d67',
      borderRadius: '20px',
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,

    padding: '10px 0',
    color:
      state.getValue()[0].label === state.data.label
        ? 'var(--secondary-txt-cl)'
        : '#a8a8a8',
    background: 'none',

    '&:hover': {
      backgroundColor: 'var(--tags-txt-cl)',
      color: 'var(--secondary-txt-cl)',
    },
    '&:active': {
      color: 'var(--secondary-txt-cl)',
      backgroundColor: 'var(--tags-txt-cl)',
    },
    cursor: 'pointer',
    '@media screen and (min-width: 1440px)': {
      ...baseStyles['@media screen and (min-width: 1440px)'],
      padding: '5px 0',
    },
  }),
  loadingIndicator: baseStyles => ({
    ...baseStyles,
    color: 'var(--secondary-txt-cl)',
  }),
};

export default makesSelectsStyles;
