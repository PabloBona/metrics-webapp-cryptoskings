import { render, screen } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 'bitcoin' }),
}));

jest.mock('../redux/slices/coinSlice', () => ({
  fetchCoin: jest.fn(),
}));

describe('CoinDetail Component', () => {
  test('renders loading when data is not yet available', () => {
    render(
      <div className="col">
        <h2 data-testid="h2test" className="align-items-center d-flex justify-content-center text-light vh-100">Loading...</h2>
      </div>,
    );
    const loadingElement = screen.getByTestId('h2test');
    expect(loadingElement).toHaveTextContent('Loading...');
    expect(loadingElement).toMatchSnapshot();
  });
});
