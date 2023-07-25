import { useEffect, useState } from "react";
import Search from "./Search";
import HoldCur from "./HoldCur";
import ToCur from "./ToCurr";
import Value from "./Value";
import Loading from "./Loading";
import Error from "./Error";

const CurConverter = () => {
  const [amount, setAmount] = useState(1);
  const [holdCurr, setHoldCurr] = useState("EUR");
  const [toCurr, setToCurr] = useState("USD");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const convertCurrency = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.api-ninjas.com/v1/convertcurrency?want=${toCurr}&have=${holdCurr}&amount=${amount}`
    );
    const data = await response.json();
    console.log(data);

    if (data.error) {
      setError(data.error);
      setLoading(false);
    } else {
      setValue(data.new_amount);
      setLoading(false);
      setError("");
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [amount, toCurr, holdCurr]);

  return (
    <>
      <div className="converter">
        <Search amount={amount} onSetAmount={setAmount} />
        <HoldCur holdCurr={holdCurr} onSetHoldCurr={setHoldCurr} />
        <ToCur toCurr={toCurr} onSetToCurr={setToCurr} />
      </div>

      <div className="display">
        {loading ? <Loading /> : error ? <Error /> : <Value value={value} />}
      </div>
    </>
  );
};

export default CurConverter;
