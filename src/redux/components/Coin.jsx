import { useDispatch, useSelector } from "react-redux";
import { fetchCoin } from "../slices/coinSlice";
import CoinCard from "./CoinCard";
import "../style/home.css";

const Coin = () => {
  const dispatch = useDispatch();

  const coinData = useSelector((state) => state.coinSlice.coin);
  const isLoading = useSelector((state) => state.coinSlice.isLoading);
  const error = useSelector((state) => state.coinSlice.error);

  const data = coinData.coins;

  if (isLoading) {
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
    <div className="main">
      <div className="main">
        <div className="row">
          <h2 className="text-white bg-stats">Crypto Currency Stats</h2>
          <>
            {data.map((coin, index) => (
              <CoinCard key={coin.rank} coin={coin} index={index} />
            ))}
          </>
        </div>
      </div>
    </div>

  );
};

export default Coin;

{/* <div className="row">
        {data.map((coin, index) => (
           <Link key={coin.rank} to={`/coins/${coin.id}`}>
          <CoinCard key={coin.rank} coin={coin} index={index} />
          </Link>
        ))}
      </div> */}