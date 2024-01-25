
import './App.css'
import EmployeeAddView from './feature/employee-add/employeeAddView'
import EmployeeEditView from './feature/employee-edit/employeeEditView'
import EmployeeListView from './feature/employee-list/employeeListView'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
        <Routes>
            <Route path='/add' element={<EmployeeAddView/>}/>
            <Route path='/' element={<EmployeeListView/>}/>
            <Route path='/edit/:eId' element={<EmployeeEditView/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
