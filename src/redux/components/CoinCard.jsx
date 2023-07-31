/* eslint-disable react/prop-types */
import "../style/home.css";

const CoinCard = ({ coin }) => {
  
  return (
    <div className="col-6 col-md-3 col-lg-3">
      <div className="card border-0">
        <div className="card-body odd">
          <img className="iconStyle" src={coin.icon} alt="" />
          <h2>{coin.name}</h2>
          <p>Price: {coin.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
