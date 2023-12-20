import PropTypes from 'prop-types';

const Icon = ({ id, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};

export default Icon;

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  props: PropTypes.array,
};
