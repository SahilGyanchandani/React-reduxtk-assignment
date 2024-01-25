import { PayloadAction, createSlice } from "@reduxjs/toolkit"

// Define the type for the initial state
type InitialState = {
    fullName: string
    birthDate: string
    department: any
    experience: number
}

// Initial state for the employeeSlice
const initialState: InitialState = {
    fullName: '',
    birthDate: '',
    department: '',
    experience: 0
}

// Create the employeeSlice using createSlice from Redux Toolkit
const employeeSlice = createSlice({
    name: 'employeeAdd', // Name of the slice
    initialState, // Initial state for the slice
    reducers: {
        // Reducer function to handle the addEmployee action
        addEmployee: (state, action: PayloadAction<InitialState>) => {
            // Update state properties with payload values from the action
            state.fullName = action.payload.fullName;
            state.birthDate = action.payload.birthDate;
            state.department = action.payload.department;
            state.experience = action.payload.experience;
        }
    }
});

// Export the reducer function and action creator
export default employeeSlice.reducer
export const { addEmployee } = employeeSlice.actions
