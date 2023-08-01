import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCoin = createAsyncThunk("coin/fetchCoin", async () => {
    try {
        const response = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=48&currency=USD");
        return [...response.data];
        } catch (error) {
            throw new Error("Error fetching Coin data");
        }
    })

const initialState = {
    coin: [],
    isLoading: false,
    error: null,
}

const coinSlice = createSlice({
    name: "coin",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCoin.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchCoin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.coin = action.payload;
        })
        .addCase(fetchCoin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
},)

export default coinSlice.reducer;
export { fetchCoin };