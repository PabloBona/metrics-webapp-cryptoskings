import { useParams } from 'react-router-dom';

const CoinDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>
        Coin with id:
        {' '}
        {id}
      </h2>
    </div>
  );
};

export default CoinDetail;
