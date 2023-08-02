import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CoinCard from '../components/CoinCard';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
}));

const mockData = {
  id: 'bitcoin',
  icon: 'https://static.coinstats.app/coins/1650455588819.png',
  name: 'Bitcoin',
  price: 6362.74960614,
  rank: 1,
};

const MockedCoinCard = ({ coin }) => (
  <BrowserRouter>
    <CoinCard coin={coin} />
  </BrowserRouter>
);

MockedCoinCard.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired,
};

describe('CoinCard Component', () => {
  test('renders coin name', () => {
    render(<MockedCoinCard coin={mockData} />);
    const coinNameElement = screen.getByText(mockData.name);
    expect(coinNameElement).toBeInTheDocument();
  });

  test('renders coin price', () => {
    render(<MockedCoinCard coin={mockData} />);
    const coinPriceElement = screen.getByText(`$${mockData.price.toFixed(5)}`);
    expect(coinPriceElement).toBeInTheDocument();
  });

  test('renders coin rank', () => {
    render(<MockedCoinCard coin={mockData} />);
    const coinRankElement = screen.getByText(`Rank ${mockData.rank}`);
    expect(coinRankElement).toBeInTheDocument();
  });

  test('renders link with correct URL', () => {
    render(<MockedCoinCard coin={mockData} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', `/coins/${mockData.id}`);
  });

  // Add more test cases as needed for other parts of the CoinCard component
});
