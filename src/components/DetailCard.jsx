import PropTypes from 'prop-types';
import './styles/coinDetail.css';

const DetailCard = ({ atributte, title }) => (
  <>
    <div className="col-12 d-flex justify-content-between details">
      <p className="align-self-center m-4 fs-3">
        {title}
      </p>
      <p className="align-self-center m-4 fs-3 text-light">
        {atributte}
      </p>
    </div>
  </>
);

DetailCard.propTypes = {
  atributte: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
};
export default DetailCard;
