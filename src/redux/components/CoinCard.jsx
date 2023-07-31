/* eslint-disable react/prop-types */
import "../style/home.css";

const CoinCard = ({ coin, index }) => {
  const isEvenIndex = index % 2 === 0;
  const cardClass = isEvenIndex ? "even" : "odd";

  return (
    <div className={`col-12 col-sm-4 col-md-4 col-lg-4 zero-pad ${cardClass}`}>
      <div className={`card border-0 rounded-0 m-0 ${cardClass}`}>
        <div className="align-items-sm-center card-body d-flex flex-column">
          <div>
          <img className="iconStyle" src={coin.icon} alt="" />
          </div>
          <h2>{coin.name}</h2>
          <p>Price: {coin.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
