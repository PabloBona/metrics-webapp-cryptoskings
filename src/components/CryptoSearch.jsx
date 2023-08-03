import './styles/cryptoSearch.css';
import PropTypes from 'prop-types';
import cryptos from '../assets/cryptos.png';

const CryptoSearch = ({ handleInputChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
CryptoSearch.propTypes = {
  handleInputChange: PropTypes.func.isRequired,

};
export default CryptoSearch;
