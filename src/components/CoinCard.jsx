import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/coinCard.css';

const CoinCard = ({ coin }) => (
  <div className="coin-card col-6 col-sm-4 col-md-4 col-lg-3">
    <Link to={`/coins/${coin.id}`} className="card-link">
      <div className="card border-0 rounded-0 m-0">
        <div className="align-items-sm-center card-body d-flex flex-column">
          <div className="align-self-center">
            <img className="iconStyle p-1 rounded-5" src={coin.icon} alt="" />
          </div>
          <div>
            <h3 className="coin-name my-3 text-center">{coin.name}</h3>
          </div>
          <div className="align-self-center container-details">
            <p className="fs-6 text-center text-white m-0">
              {`$${coin.price.toFixed(5)}`}
            </p>
            <p className="fs-6 text-center text-white m-0">
              {`Rank ${coin.rank}`}
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
    rank: PropTypes.number.isRequired,
  }).isRequired,
};

export default CoinCard;
