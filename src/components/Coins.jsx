import { useDispatch, useSelector } from 'react-redux';
import CoinCard from './CoinCard';
import './styles/coins.css';
import { fetchCoin } from '../redux/slices/coinSlice';
import CryptoSearch from './CryptoSearch';

const Coins = () => {
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.coinSlice.coin);
  const error = useSelector((state) => state.coinSlice.error);
  const global = useSelector((state) => state.coinSlice.globalSearch);
  const data = coinData.coins;

  console.log(global);

  if (global) {
    const FData = data.filter((coin) => coin.name.toLowerCase().includes(global.toLowerCase()));
    return (
      <>
        <CryptoSearch />
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
                {FData.map((coin) => (
                  <CoinCard
                    key={coin.id}
                    coin={coin}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

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
    dispatch(fetchCoin());
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 data-testid="h2test" className="align-items-center d-flex justify-content-center text-light vh-100">Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <CryptoSearch />
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
              {data.map((coin, index) => (
                <CoinCard key={coin.rank} coin={coin} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Coins;
