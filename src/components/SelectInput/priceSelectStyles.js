import makesSelectsStyles from './makesSelectStyles';

const priceSelectStyles = () => {
  return {
    ...makesSelectsStyles,

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
        minWidth: '130px',
        borderRadius: '14px',
        padding: '0 18px',
      },
    }),
  };
};

export default priceSelectStyles;
