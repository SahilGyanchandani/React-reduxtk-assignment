import { useState } from "react"
import { addEmployee } from "./employeeAddSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";


export default function EmployeeAddView() {
    const dispatch = useAppDispatch();
    const [employeeData, setEmployeeData] = useState({  fullName: "", birthDate: "", department: "", experience: 0 })


    function handleAddEmployee() {

        dispatch(addEmployee(employeeData));

        // save employeeData to localStorage
        const storedEmployeeData = JSON.parse(localStorage.getItem("employees") || "[]");
        localStorage.setItem("employees", JSON.stringify([...storedEmployeeData, employeeData]))


        //clear the form after submission
        setEmployeeData({
            fullName: "",
            birthDate: "",
            department: "",
            experience: 0,
        });
    }
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Add Employee</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Full Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        placeholder="Enter Full Name"
                        value={employeeData.fullName}
                        onChange={(e) => setEmployeeData({ ...employeeData, fullName: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Birth Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        name="birthDate"
                        value={employeeData.birthDate}
                        onChange={(e) => setEmployeeData({ ...employeeData, birthDate: (e.target.value) })}
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label">Department:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="department"
                        placeholder="Enter Department Name"
                        value={employeeData.department}
                        onChange={(e) => setEmployeeData({ ...employeeData, department: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Experience:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="experience"
                        placeholder="Enter Experience"
                        value={employeeData.experience}
                        onChange={(e) => setEmployeeData({ ...employeeData, experience: parseInt(e.target.value, 10) })}
                    />
                </div>

                <button type="button" className="btn btn-primary" onClick={handleAddEmployee}>
                    Add Employee
                </button>
            </form>
        </div>
    );
}