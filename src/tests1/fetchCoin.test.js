import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { fetchCoin } from '../redux/slices/coinSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchCoin Thunk', () => {
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

  it('should fetch coin data successfully', async () => {
    const mockCoinData = {
      coins: [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          rank: 1,
          symbol: 'BTC',
          price: 6362.74960614,
        },

      ],
    };
    axiosGetSpy.mockResolvedValueOnce({ data: mockCoinData });

    await store.dispatch(fetchCoin());

    const actions = store.getActions();
    expect(actions[0].type).toBe('coin/fetchCoin/pending');
    expect(actions[1].type).toBe('coin/fetchCoin/fulfilled');
    expect(actions[1].payload).toEqual(mockCoinData);
  });

  it('should handle fetchCoin error', async () => {
    const errorMessage = 'Network Error';
    axiosGetSpy.mockRejectedValueOnce(new Error(errorMessage));

    await store.dispatch(fetchCoin());

    const actions = store.getActions();
    expect(actions[0].type).toBe('coin/fetchCoin/pending');
    expect(actions[1].type).toBe('coin/fetchCoin/rejected');
    expect(actions[1].error.message).toBe('Error fetching Coin data');
  });
});
