"use client";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import globalReducer from "../state";
/* REDUX STORE */
const rootReducer = combineReducers({
    global: globalReducer,
});
export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
    });
};
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
/* PROVIDER */
export default function StoreProvider({ children, }) {
    const storeRef = useRef(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
        setupListeners(storeRef.current.dispatch);
    }
    return <Provider store={storeRef.current}>{children}</Provider>;
}
