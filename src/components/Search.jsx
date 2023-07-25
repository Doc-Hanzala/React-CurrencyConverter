const Search = ({ onSetAmount, amount }) => {
  return (
    <input
      type="text"
      value={amount}
      onChange={(e) => onSetAmount(e.target.value)}
    />
  );
};

export default Search;
