import { useDispatch, useSelector } from "react-redux";
import { fetchCoin } from "../slices/coinSlice";
import CoinCard from "./CoinCard";
import "../style/home.css";

const Home = () => {
  const dispatch = useDispatch();

  const coinData = useSelector((state) => state.coinSlice.coin);
  const isLoading = useSelector((state) => state.coinSlice.isLoading);
  const error = useSelector((state) => state.coinSlice.error);

  const data = coinData.coins;
  console.log(data);

  if (!data) {
    dispatch(fetchCoin());
  }

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

  return (
    <div className=" coincard">
      <div className="row">
        {data.map((coin) => (
          <CoinCard key={coin.rank} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default Home;
