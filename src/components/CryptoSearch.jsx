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

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <div className="search-form py-2">
        <form className="container" onSubmit={handleSubmit}>
          <div className="justify-content-center row">
            <div className="col-8">
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control coin-search-input text-white fs-6"
                placeholder="Enter coin name E.g: Litecoin"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CryptoSearch;
