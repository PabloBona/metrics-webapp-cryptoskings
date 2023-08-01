import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CoinCard = ({ coin }) => (
  <div className="coin-card col-6 col-sm-4 col-md-4 col-lg-3">
    <Link to={`/coins/${coin.id}`} className="card-link">
      <div className="card border-0 rounded-0 m-0">
        <div className="align-items-sm-center card-body d-flex flex-column">
          <div className="align-self-center">
            <img className="iconStyle p-1 rounded-5" src={coin.icon} alt="" />
          </div>
          <div className="">
            <h3 className="fs-4 fw-bold my-3 text-center text-white">{coin.name}</h3>
          </div>
          <div className="align-self-center">
            <p className="fs-5 text-center text-white m-0">
              {`$${coin.price.toFixed(5)}`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

CoinCard.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CoinCard;
