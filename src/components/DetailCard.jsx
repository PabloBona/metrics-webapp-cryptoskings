/* eslint-disable react/prop-types */
import './styles/coinDetail.css';

const DetailCard = ({ coin }) => (
  <>
    <div className="row rank-details">
      <div className="col-6 d-flex fs-5 justify-content-center text-light">
        <p className="align-self-center m-4">
          Rank #
          {coin.rank}
        </p>
      </div>
      <div className="col-6">
        <div className="ccol-6 d-flex fs-5 justify-content-center text-light">
          <p className="align-self-center my-4 text-light">
            Last24hs
            {' '}
            $
            {coin.priceChange1d}
          </p>
        </div>
      </div>
    </div>
  </>
);

export default DetailCard;
