const extractCarAddress = address => {
  return address.split(', ').slice(-2);
};

export default extractCarAddress;
