import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "./slices/coinSlice";

const store = configureStore({
    reducer: {
      coinSlice
    }
})

export default store;