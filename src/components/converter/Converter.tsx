import React, { useEffect, useState } from "react";
import { convert } from "../../helper/convertHelber";
import styels from "./converter.module.css";

const CurrencyConverter = ({ from, to }) => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState(from);
  const [toCurrency, setToCurrency] = useState(to);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    async function fetchCurrency() {
      const response = await fetch(
        "http://data.fixer.io/api/latest?access_key=14049732329fd51799a154ce9885502d"
      );

      const data = await response.json();

      //   const ratesArr = Object.keys(data.rates);

      setRates(data.rates);
    }

    fetchCurrency();
    setExchangeRate(rates[toCurrency]);
  }, [rates, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleConvert = () => {
    const converted = convert(rates[fromCurrency], rates[toCurrency], amount);

    setConvertedAmount(converted);
  };
  const handelSwap = () => {
    const temp = toCurrency;
    setToCurrency(fromCurrency);
    setFromCurrency(temp);
  };

  return (
    <div className={styels.card}>
      <h2>Currency Converter</h2>
      <div className={styels.inner}>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={handleAmountChange} />
        </div>

        <div>
          <label>From : </label>
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {Object.keys(rates).map((r) => {
              return (
                <option key={r} value={r}>
                  {r}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button onClick={handelSwap}> SWAP </button>
        </div>
        <div>
          <label>To : </label>
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {Object.keys(rates).map((r) => {
              return (
                <option key={r} value={r}>
                  {r}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <button onClick={handleConvert}>Convert</button>
        </div>
      </div>
      <div>
        <p>Exchange Rate: {exchangeRate}</p>
        <p>Converted Amount: {convertedAmount}</p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
