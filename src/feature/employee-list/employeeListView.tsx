import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Define the Employee interface
export interface Employee {
    fullName: string;
    birthDate: string;
    department: string;
    experience: number;
}

function EmployeeListView() {
    // State to manage the list of employees
    const [employeeList, setEmployeeList] = useState<Employee[]>([]);
    let isMounted: boolean = true;

    // useEffect to fetch employee data from localStorage on component mount
    useEffect(() => {
        if (isMounted) {
            // Fetch employee data from localStorage
            const storedEmployeesJson = localStorage.getItem('employees');
            
            // Parse the JSON data or set an empty array if no data is present
            const storedEmployees = storedEmployeesJson ? JSON.parse(storedEmployeesJson) : [];

            // Update the state with the fetched employee data
            setEmployeeList(storedEmployees);
        }
        
        // Cleanup function to set isMounted to false on component unmount
        return () => {
            isMounted = false;
        };

    }, []);

    // Function to handle delete action
    const handleDelete = (index: number) => {
        return () => {
            // Confirm deletion with the user
            const confirmation = window.confirm('Are you sure you want to delete');
            
            // If user confirms, update the list and localStorage
            if (confirmation) {
                const updatedList = [...employeeList];
                updatedList.splice(index, 1);
                setEmployeeList(updatedList);
                localStorage.setItem('employees', JSON.stringify(updatedList));
            }
        };
    }

    return (
        <div>
            <h2>Employee List</h2>
            {/* Link to navigate to the Add Employee page */}
            <Link to={"/add"}>
                <button>Add Employee</button>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Birth Date</th>
                        <th>Department</th>
                        <th>Experience</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map through the employeeList and render table rows */}
                    {employeeList.map((data, i) => (
                        <tr key={i}>
                            <td>{data.fullName}</td>
                            <td>{data.birthDate}</td>
                            <td>{data.department}</td>
                            <td>{data.experience}</td>
                            <td>
                                {/* Link to navigate to the Edit Employee page */}
                                <Link to={`/edit/${(i)}`}>
                                    <button className="btn btn-primary">Edit</button>
                                </Link>
                                {/* Button to handle delete action */}
                                <button className="btn btn-danger ms-2" onClick={handleDelete(i)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeListView;
