import { configureStore } from "@reduxjs/toolkit";

configureStore({
    reducer: {
      // in this reducer we host all the globals states
    }
})

export default configureStore;