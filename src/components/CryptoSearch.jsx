import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoin, setGlobalSearch } from '../redux/slices/coinSlice';
import './styles/cryptoSearch.css';
import cryptos from '../cryptos.png';

const CryptoSearch = () => {
  const coinData = useSelector((state) => state.coinSlice);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const global = e.target.value.trim();
    dispatch(setGlobalSearch(global));
    console.log(global);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (coinData.length === 0) {
      dispatch(fetchCoin());
    }
  }, [dispatch, coinData]);

  return (
    <>
      <div className="d-flex justify-content-center img-container">
        <img className="img-fluid w-100 img-max-width" src={cryptos} alt="" />
      </div>
      <div className="background py-2">
        <form className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-12">
              <input
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                type="text"
                className="form-control"
                placeholder="Bitcoin, Ethereum, etc."
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CryptoSearch;
