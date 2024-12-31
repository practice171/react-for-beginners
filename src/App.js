import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoinsValue, setSelectedCoinsValue] = useState();
  const [amount, setAmount] = useState();
  const [selectedCoinsName, setSelectedCoinsName] = useState();
  const selectCoin = (event) => {
    const getCoin = event.target.value;
    setSelectedCoinsValue(getCoin.match(/\d+(\.\d+)*/g)?.join("") || "");
    setSelectedCoinsName(
      [...getCoin.matchAll(/\((.*?)\)/g)].map((match) => match[1])
    );
  };
  const inputAmount = (prop) => setAmount(prop.target.value);
  console.log(selectedCoinsValue);
  console.log(selectedCoinsName);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);

  return (
    <div>
      <h1>The Coins!({coins.length})</h1>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <div>
            <h3>Select the coin name</h3>
          </div>
          <div style={{ margin: "10px 0px" }}>
            <select onChange={selectCoin}>
              {coins.map((coin) => (
                <option key={coin.id}>
                  {coin.name} ({coin.symbol}) ${coin.quotes.USD.price}USD
                </option>
              ))}
            </select>
          </div>
          <hr />
          <div>
            <h3>Enter the amount you want to exchange</h3>
            <input
              onChange={inputAmount}
              type="number"
              placeholder="Enter the amount"
            />
          </div>
          <hr />
          <div>
            {selectedCoinsValue !== undefined && amount !== undefined ? (
              <h3>
                you can get {amount / selectedCoinsValue}({selectedCoinsName})
              </h3>
            ) : (
              <h3>you should put in what you knowing</h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
