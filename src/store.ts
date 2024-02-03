import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from "./redux/counterSlice";

const rootReducer = combineReducers({
    counter: countReducer,
})

const store = configureStore({
    reducer: rootReducer,
})


export type RootState =  ReturnType< typeof rootReducer>;

export default store;