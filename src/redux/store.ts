import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice.ts";

const store = configureStore({
    reducer: {
        // Add your reducers here
        counter: counterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

// This code sets up a Redux store using Redux Toolkit. 
// It imports the `configureStore` function from `@reduxjs/toolkit` and 
// creates a store with an empty reducer object. 
// The `RootState` and `AppDispatch` types are also exported for use in the application. 
// The store can be used to manage global state in a React application.