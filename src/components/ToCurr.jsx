const ToCur = ({ toCurr, onSetToCurr }) => {
  return (
    <select value={toCurr} onChange={(e) => onSetToCurr(e.target.value)}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="QAR">QAR</option>
    </select>
  );
};

export default ToCur;
