import PropTypes from 'prop-types';
import PulseLoader from 'react-spinners/PulseLoader';

const Loader = ({ size = 10, margin = 6, position = {} }) => {
  return (
    <PulseLoader
      color={'var(--main-txt-cl)'}
      cssOverride={position}
      loading={true}
      size={size}
      margin={margin}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;

Loader.propTypes = {
  size: PropTypes.number,
  margin: PropTypes.number,
  position: PropTypes.object,
};
