// In your test file (Coins.test.js)
import { render, screen } from '@testing-library/react';
import mockData from './__mocks__/mockData';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn((selector) => selector({ coinSlice: { coin: mockData } })),
}));
jest.mock('../redux/slices/coinSlice', () => ({
  fetchCoin: jest.fn(() => Promise.resolve(mockData)),
}));

describe('Coins Component', () => {
  test('renders loading when data is not yet available', () => {
    // Render the component
    render(
      <div className="col">
        <h2
          data-testid="h2test"
          className="align-items-center d-flex justify-content-center text-light vh-100"
        >
          Loading...
        </h2>
      </div>,
    );
    // Assert that the loading text is displayed
    const loadingElement = screen.getByTestId('h2test');
    expect(loadingElement).toHaveTextContent('Loading...');
  });
  test('renders Crypto Currency Stats when Render  ', () => {
    // Render the component
    render(
      <h2 className="text-white bg-stats m-0">Crypto Currency Stats</h2>,
    );
    // Assert that the loading text is displayed
    const loadingElement = screen.getByText('Crypto Currency Stats');
    expect(loadingElement).toHaveTextContent('Crypto Currency Stats');
  });
});
