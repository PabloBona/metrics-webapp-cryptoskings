import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCoin } from '../redux/slices/coinSlice';
import './styles/coinDetail.css';
// import DetailCard from './DetailCard';

const CoinDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.coinSlice.coin);
  const data = coinData.coins;

  useEffect(() => {
    if (!data) {
      dispatch(fetchCoin());
    }
  }, [dispatch, data]);

  if (!data) {
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

  const coin = data.find((coin) => coin.id === id);
  if (!coin) {
    return (
      <div>
        <h2>No coin found</h2>
      </div>
    );
  }

  return (
    <div className="container" key={coin.id}>
      <div className="row name-details">
        <div className="col-6 d-flex fs-1 justify-content-center text-light">
          <p className="align-self-center m-4">
            {coin.name}
          </p>
        </div>
        <div className="col-6">
          <div className="align-self-center">
            <img className="m-4" src={coin.icon} alt="" />
          </div>
        </div>
      </div>
      <div className="row rank-details">
        <div className="col-6 d-flex fs-5 justify-content-center text-light">
          <p className="align-self-center m-4">
            {coin.symbol}
          </p>
        </div>
        <div className="col-6">
          <div className="ccol-6 d-flex fs-5 justify-content-center text-light">
            <p className="align-self-center my-4 text-light">
              U$S
              {' '}
              {coin.price.toFixed(5)}
            </p>
          </div>
        </div>
      </div>
      <div className="row name-details">
        <div className="col-6 d-flex fs-5 justify-content-center text-light">
          <p className="align-self-center m-4">
            Rank #
            {coin.rank}
          </p>
        </div>
        <div className="col-6">
          <div className="ccol-6 d-flex fs-5 justify-content-center text-light">
            <p className="align-self-center my-4 text-light">
              Last24hs
              {' '}
              $
              {coin.priceChange1d}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
