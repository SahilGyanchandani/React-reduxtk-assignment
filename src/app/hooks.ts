import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootStates } from "./employeeManagement";


    export const useAppSelector:TypedUseSelectorHook<RootStates>=useSelector
    export const useAppDispatch = () => useDispatch<AppDispatch>()