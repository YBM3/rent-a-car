const genMakesSelectOpt = data => {
  const optArr = [...data]
    .sort((a, b) => a.localeCompare(b))
    .map(el => ({
      value: el,
      label: el,
    }));

  return [{ label: 'All makers' }, ...optArr];
};

export default genMakesSelectOpt;
