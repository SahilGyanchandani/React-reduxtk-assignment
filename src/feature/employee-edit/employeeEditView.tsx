import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Employee } from "../employee-list/employeeListView";

// Define the EmployeeEditView component
function EmployeeEditView() {
    // Initialize a boolean variable to track component mounting
    let isMounted: boolean = true;

    // Access the navigate function from React Router DOM
    const navigate = useNavigate();

    // Extract the employee ID parameter from the URL
    const { eId } = useParams();

    // State variables to manage employee data and not found status
    const [employeeEdit, setEmployeeEdit] = useState({ fullName: "", birthDate: "", department: "", experience: 0 });
    const [error, setError] = useState('');
    const [employeeNotFound, setEmployeeNotFound] = useState<boolean>(false);

    // useEffect hook to fetch and set employee data when the component mounts or when eId changes
    useEffect(() => {
        // Fetch data from localStorage
        const localStorageData = localStorage.getItem("employees");

        // Check if localStorageData exists and the component is still mounted
        if (localStorageData && isMounted) {
            const employees: Employee[] = JSON.parse(localStorageData);

            // Convert eId to a number to get the selected employee
            const selectedIndex = Number(eId);

            // Get the selected employee from the array
            const selectedEmployee = employees[selectedIndex];

            // Check if the selected employee exists
            if (selectedEmployee) {
                // Set the employee data and update not found status
                setEmployeeEdit(selectedEmployee);
                setEmployeeNotFound(false);
            } else {
                // Set not found status if the employee is not found
                setEmployeeNotFound(true);
            }
        }

        // Cleanup function to update the mounting status when the component unmounts
        return () => {
            isMounted = false;
        };
    }, [eId]);

    // Function to handle editing employee data and updating localStorage
    function handleEditEmployee() {
        const localStorageData = localStorage.getItem("employees");
        if (localStorageData) {
            const employees: Employee[] = JSON.parse(localStorageData);
            const selectedIndex = Number(eId);

            // Update the employee data at the selected index
            if (employeeEdit) {
                employees[selectedIndex] = employeeEdit;

                // Update localStorage with the modified data
                localStorage.setItem("employees", JSON.stringify(employees));

                // Show a success alert
                alert('Employee Edited Successfully.');
            }
        }
    }

    // Function to handle changes in the Full Name input
    function handleFullName(e: ChangeEvent<HTMLInputElement>) {
        const input = e.target.value;

        // Regular expression to allow only letters A-Z and spaces in the input
        const onlyLetters = /^[A-Za-z ]+$/;

        // Regular expression to identify invalid characters
        const invalidCharacter = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

        // Validate input against regular expressions and update state
        if (onlyLetters.test(input) && !invalidCharacter.test(input) || input === '') {
            setEmployeeEdit({ ...employeeEdit, fullName: input });
            setError('');
        } else {
            setError('Allow only letters (A-Z)');
        }
    }

    // JSX content to be rendered
    return (
        <div>
            {/* Render a message if the employee is not found */}
            {employeeNotFound ? (
                <p>Employee Not found</p>
            ) : (
                <div className="container mt-5">
                    {/* Render the edit form if employee data is available */}
                    <h2 className="mb-4">Edit Employee</h2>
                    {employeeEdit ? (
                        <form>
                            {/* Form fields to edit employee details */}
                            <div className="mb-3">
                                <label className="form-label">Full Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fullName"
                                    placeholder="Enter Full Name"
                                    value={employeeEdit.fullName}
                                    // onChange={(e) => setEmployeeEdit({ ...employeeEdit, fullName: e.target.value })}
                                    onInput={handleFullName}  // Use onInput event for real-time input validation

                                />
                            </div>

                            {/* Display error message if there is an error */}
                            {error && <div className="text-danger">{error}</div>}

                            {/* Additional form fields for birth date, department, and experience */}
                            <div className="mb-3">
                                <label className="form-label">Birth Date:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="birthDate"
                                    value={employeeEdit.birthDate}
                                    onChange={(e) => setEmployeeEdit({ ...employeeEdit, birthDate: e.target.value })}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Department:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="department"
                                    placeholder="Enter Department Name"
                                    value={employeeEdit.department}
                                    onChange={(e) => setEmployeeEdit({ ...employeeEdit, department: e.target.value })}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Experience:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="experience"
                                    placeholder="Enter Experience"
                                    value={employeeEdit.experience}
                                    onChange={(e) => setEmployeeEdit({ ...employeeEdit, experience: parseInt(e.target.value, 10) })}
                                />
                            </div>

                            {/* Button to trigger the editing process */}
                            <button type="button" className="btn btn-primary" onClick={handleEditEmployee}>
                                Edit Employee
                            </button>

                            <hr />

                            {/* Button to navigate back to the employee list */}
                            <button type="button" className="btn btn-primary" onClick={() => navigate('/')}>
                                Back
                            </button>
                        </form>
                    ) : (
                        // Loading message while employee data is being fetched
                        <p>Loading...</p>
                    )}
                </div>
            )}
        </div>
    );
}

// Export the EmployeeEditView component
export default EmployeeEditView;
