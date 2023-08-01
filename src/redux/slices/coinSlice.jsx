import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCoin = createAsyncThunk('coin/fetchCoin', async () => {
  try {
    const response = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=60&currency=USD');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching Coin data');
  }
});

const fetchChart = createAsyncThunk('coin/fetchChart', async (id) => {
  try {
    const response = await axios.get(`https://api.coinstats.app/public/v1/charts?period=24h&coinId=${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching Chart data');
  }
});

const initialState = {
  coin: {},
  isLoading: false,
  error: null,
};

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setGlobalSearch: (state, action) => ({
      ...state,
      globalSearch: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoin.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(fetchCoin.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        error: null,
        coin: action.payload,
      }))
      .addCase(fetchCoin.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }))
      .addCase(fetchChart.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(fetchChart.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        error: null,
        chartData: action.payload,
      }))
      .addCase(fetchChart.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export const { setGlobalSearch } = coinSlice.actions;
export default coinSlice.reducer;
export { fetchCoin, fetchChart };
