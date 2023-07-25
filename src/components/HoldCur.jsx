const HoldCur = ({ holdCurr, onSetHoldCurr }) => {
  return (
    <select value={holdCurr} onChange={(e) => onSetHoldCurr(e.target.value)}>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="QAR">QAR</option>
    </select>
  );
};

export default HoldCur;
