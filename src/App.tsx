
import './App.css'
import EmployeeAddView from './feature/employee-add/employeeAddView'
import EmployeeListView from './feature/employee-list/employeeListView'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
        <Routes>
            <Route path='Add' element={<EmployeeAddView/>}/>
            <Route path='/' element={<EmployeeListView/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
