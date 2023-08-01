import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCoin } from '../redux/slices/coinSlice';

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
    <div>
      <h2>
        Coin with id:
        {' '}
        {id}
      </h2>
      <div key={coin.id}>
        {coin.name}
      </div>
    </div>
  );
};

export default CoinDetail;
