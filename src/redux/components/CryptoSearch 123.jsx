import "../style/CryptoSearch.css"
import { fetchCoin, setGlobalSearch } from "../slices/coinSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CryptoSearch = () => {
  const coinData = useSelector(state => state.coinSlice)
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    dispatch(setGlobalSearch(e.target.value.trim()));
  }
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
    e.preventDefault();
    }
  };
  useEffect(() => {
    if (coinData.length === 0) {
      dispatch(fetchCoin());
      console.log(coinData)
    }
  }, [dispatch, coinData]);
  return (
    <div className="background py-2">
    <form className="container">
      <div className="row align-items-center">
        <div className="col-8 col-sm-8">
          <input onChange={handleInputChange}  onKeyPress={handleKeyPress} type="text" className="form-control" placeholder="Bitcoin, Ethereum, etc." />
        </div>
        <div className="col-2 col-sm-4">
          <button type="reset" className="btn btn-primary">Search</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default CryptoSearch