import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { fetchChart } from '../redux/slices/coinSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchChart Thunk', () => {
  let store;
  let axiosGetSpy;

  beforeEach(() => {
    store = mockStore({
      coin: {},
      isLoading: false,
      error: null,
    });

    axiosGetSpy = jest.spyOn(axios, 'get');
  });

  afterEach(() => {
    store.clearActions();
    axiosGetSpy.mockRestore();
  });

  it('should fetch chart data successfully', async () => {
    const mockChartData = { /* ... */ };
    const coinId = 'btc';
    axiosGetSpy.mockResolvedValueOnce({ data: mockChartData });

    await store.dispatch(fetchChart(coinId));

    const actions = store.getActions();
    expect(actions[0].type).toBe('coin/fetchChart/pending');
    expect(actions[1].type).toBe('coin/fetchChart/fulfilled');
    expect(actions[1].payload).toEqual(mockChartData);
  });

  it('should handle fetchChart error', async () => {
    const coinId = 'btc';
    const errorMessage = 'Network Error';
    axiosGetSpy.mockRejectedValueOnce(new Error(errorMessage));

    await store.dispatch(fetchChart(coinId));

    const actions = store.getActions();
    expect(actions[0].type).toBe('coin/fetchChart/pending');
    expect(actions[1].type).toBe('coin/fetchChart/rejected');
    expect(actions[1].error.message).toBe('Error fetching Chart data');
  });
});
