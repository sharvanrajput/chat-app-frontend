import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer
    }
})

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()

export default store