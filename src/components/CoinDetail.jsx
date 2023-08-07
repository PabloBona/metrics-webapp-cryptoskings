import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { fetchCoin } from '../redux/slices/coinSlice';
import './styles/coinDetail.css';
import DetailCard from './DetailCard';

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
    <div className="container-fluid" key={coin.id}>
      <div className="row name-details">
        <div className="align-self-center bg col d-flex justify-content-center my-3">
          <img className="icon p-1 rounded-5" src={coin.icon} alt="" />
        </div>
        <NavLink to="/" className="text-white btn-back">
          <i className="bx bx-arrow-back" />
        </NavLink>
        <DetailCard atributte={coin.name} title="Coin Name" />
        <DetailCard atributte={coin.symbol} title="Coin Symbol" />
        <DetailCard atributte={coin.price.toFixed(5)} title="Coin Prize U$S" />
        <DetailCard atributte={coin.priceChange1d} title="Prize Change Last 24hs" />
        <DetailCard atributte={coin.rank} title="Coin Rank" />
        <DetailCard atributte={coin.marketCap.toFixed(1)} title="Market Cap" />
        <DetailCard atributte={coin.volume.toFixed(1)} title="Volume" />
        <DetailCard atributte={coin.totalSupply.toFixed(1)} title="Total Supply" />
      </div>
    </div>
  );
};

export default CoinDetail;
