const scrollSmooth = ({ arr, limit }) => {
  const height = 250;
  if (arr.length > limit) {
    window.scrollBy({
      top: height * 1.5,
      behavior: 'smooth',
    });
  }
};

export default scrollSmooth;
