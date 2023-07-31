/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

const CoinCard = ({ coin, index }) => {
  const isEvenIndex = index % 2 === 0;
  const cardClass = isEvenIndex ? 'even' : 'odd';
  const isBgColor = isEvenIndex ? 'odd' : 'even ';

  return (
    <div className={`col-4 col-sm-4 col-md-4 col-lg-4 zero-pad ${cardClass}`}>
      <div className={`card border-0 rounded-0 m-0 ${cardClass}`}>
        <div className="align-items-sm-center card-body d-flex flex-column">
          <div className="align-self-center">

            <Link to={`/coins/${coin.id}`}>
              <img className={`iconStyle p-1 rounded-5 ${isBgColor}`} src={coin.icon} alt="" />
            </Link>
          </div>
          <div className="">
            <h3 className="fs-6 fw-bold my-3 text-center text-white">{coin.name}</h3>
          </div>
          <div className="align-self-center">
            <div className="fs-6 text-center text-white">
              Price:
              {' '}
              <br />
              {' '}
              {coin.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
