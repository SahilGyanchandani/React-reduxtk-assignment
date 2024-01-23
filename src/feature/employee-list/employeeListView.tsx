import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface Employee {
    fullName: string;
    birthDate: string;
    department: string;
    experience: number;
}
function EmployeeListView() {
    const [employeeList, setEmployeeList] = useState<Employee[]>([]);

    useEffect(() => {
        //Fetch employee data from localStorage
        const storedEmployeesJson = localStorage.getItem('employees')
        const storedEmployees = storedEmployeesJson ? JSON.parse(storedEmployeesJson) : [];
        setEmployeeList(storedEmployees);
    }, []);
    return (
        <div>
            <h2>
                Employee List
            </h2>
            <Link to={"/Add"}>
                <button  >Add Employee</button>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Birth Date</th>
                        <th>Department</th>
                        <th>Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((data) => (
                        <tr key={data.fullName}>
                            <td>{data.fullName}</td>
                            <td>{data.birthDate}</td>
                            <td>{data.department}</td>
                            <td>{data.experience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeListView;