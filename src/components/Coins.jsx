import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import CoinCard from './CoinCard';
import './styles/coins.css';
import { fetchCoin } from '../redux/slices/coinSlice';
import CryptoSearch from './CryptoSearch';

const Coins = () => {
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.coinSlice.coin);
  const error = useSelector((state) => state.coinSlice.error);

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    setSearch(e.target.value.trim());
  };

  useEffect(() => {
    if (coinData.coins) {
      const filteredData = coinData.coins.filter((coin) => coin.name.toLowerCase()
        .includes(search.toLowerCase()));
      setData(filteredData);
    } else {
      dispatch(fetchCoin());
    }
  }, [coinData, search, dispatch]);

  if (error) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="align-items-center d-flex justify-content-center text-danger vh-100 fs-2">
              {error}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2
              data-testid="h2test"
              className="align-items-center d-flex justify-content-center text-light vh-100"
            >
              Loading...
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <CryptoSearch handleInputChange={handleInputChange} />
      <main>
        <section className="bg-stats">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <h2 className="text-white bg-stats m-0">Crypto Currency Stats</h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid p-0">
            <div className="row g-0">
              {data.length > 0 ? data.map((coin, index) => (
                <CoinCard key={coin.rank} coin={coin} index={index} />
              )) : <div className="col text-center"><h2 className="text-white my-3">No results found</h2></div>}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Coins;
