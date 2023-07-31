import "../style/CryptoSearch.css";
import { fetchCoin, setGlobalSearch } from "../slices/coinSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CryptoSearch = () => {
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.coinSlice.coin);
  const isLoading = useSelector((state) => state.coinSlice.isLoading);
  const error = useSelector((state) => state.coinSlice.error);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.searchInput.value.trim();
    dispatch(setGlobalSearch(searchValue));
  };

  useEffect(() => {
    if (!coinData.length) {
      dispatch(fetchCoin());
    }
  }, [dispatch, coinData.length]);

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
    <div className="background py-2">
      <form onSubmit={handleFormSubmit} className="container">
        <div className="row align-items-center">
          <div className="col-8 col-sm-8">
            <input
              type="text"
              name="searchInput"
              className="form-control"
              placeholder="Bitcoin, Ethereum, etc."
            />
          </div>
          <div className="col-2 col-sm-4">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CryptoSearch;
