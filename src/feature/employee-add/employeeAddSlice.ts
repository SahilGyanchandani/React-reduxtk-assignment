import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
    fullName: string
    birthDate: Date | null
    department: any
    experience: number
}

const initialState: InitialState = {
    fullName: '',
    birthDate: null,
    department: '',
    experience: 0
}

const employeeSlice = createSlice({
    name: 'employeeAdd',
    initialState,
    reducers: {
        addEmployee: (state, action: PayloadAction<InitialState>) => {
            state.fullName = action.payload.fullName;
            state.birthDate = action.payload.birthDate;
            state.department = action.payload.department;
            state.experience = action.payload.experience;
        }
    }
});

export default employeeSlice.reducer
export const { addEmployee } = employeeSlice.actions
