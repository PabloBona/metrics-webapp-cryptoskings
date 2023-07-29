import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCoin = createAsyncThunk("coin/fetchCoin", async () => {
    try {
        const response = await axios.get("https://api.coincap.io/v2/assets");
        return [...response.data];
        } catch (error) {
            throw new Error("Error fetching Coin data");
        }
    })

const coinSlice = createSlice({
    name: "coin",
    initialState: {},
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