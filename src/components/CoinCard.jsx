import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CoinCard = ({ coin, index }) => {
  const isIndex = (index === 0 || index === 3 || index === 4 || index === 7 || index === 8);
  const isColor = isIndex ? 'odd' : 'even';
  return (
    <div className={`col-6 col-sm-6 col-md-6 col-lg-6 zero-pad ${isColor}`}>
      <div className={`card border-0 rounded-0 m-0 ${isColor}`}>
        <div className="align-items-sm-center card-body d-flex flex-column">
          <div className="align-self-center">
            <Link to={`/coins/${coin.id}`}>
              <img className={`iconStyle p-1 rounded-5 ${isColor}`} src={coin.icon} alt="" />
            </Link>
          </div>
          <div className="">
            <h3 className="fs-6 fw-bold my-3 text-center text-white">{coin.name}</h3>
          </div>
          <div className="align-self-center">
            <div className="fs-6 text-center text-white">
              Price:
              <br />
              {coin.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoinCard.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CoinCard;
