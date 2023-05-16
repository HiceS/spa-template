import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";


import sampleReducer from "./SampleSlice";


export const store = configureStore({
    reducer: {
        sample: sampleReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({})
});

export type State = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
