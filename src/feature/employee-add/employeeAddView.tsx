import {  useState } from "react"
import { useDispatch } from "react-redux";
import { addEmployee } from "./employeeAddSlice";


export default function EmployeeAddView() {
    const dispatch = useDispatch();
    const [employeeData, setEmployeeData] = useState({ fullName: "", birthDate: null, department: "", experience: 0 })

    function handleAddEmployee() {
        dispatch(addEmployee(employeeData))
        console.log(dispatch);
        
    }
    return (
        <div>
            <h2>Add Employee</h2>
            <form>
                <div>
                    <label>Full Name:</label>
                    <input type="text" name="fullName" placeholder="Enter Full Name" value={employeeData.fullName} onChange={(e) => setEmployeeData({ ...employeeData, fullName: e.target.value })}></input>
                </div>
                {/* <div>
                    <label>BirthDate</label>
                    <input
                        type="date"
                        name="birthDate"
                        value={employeeData.birthDate}
                        onChange={(e) => handleDateChange(new Date(e.target.value))}></input>
                </div> */}
                <div>
                    <label>Department </label>
                    <input type="text" name="department" placeholder="Enter Department Name" value={employeeData.department} onChange={(e) => setEmployeeData({ ...employeeData, department: e.target.value })}></input>
                </div>
                <div>
                    <label>Experience</label>
                    <input type="number" name="experience" placeholder="Enter Experience" value={employeeData.experience} onChange={(e) => setEmployeeData({ ...employeeData, experience: parseInt(e.target.value, 10) })}></input>
                </div>
                <button type="button" onClick={handleAddEmployee}>
                    Add Employee
                </button>
            </form >
        </div >
    );
}