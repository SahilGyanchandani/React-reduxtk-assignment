import { configureStore } from "@reduxjs/toolkit";
import employeeAddSlice from "../feature/employee-add/employeeAddSlice";

const employeeManagement=configureStore({
    reducer:{
        addEmployeee:employeeAddSlice,
    }
})

export default employeeManagement
export type RootStates=ReturnType<typeof employeeManagement.getState>
export type AppDispatch=typeof employeeManagement.dispatch