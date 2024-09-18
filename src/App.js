import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Student from './pages/Student';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';


function App () {
  return (
    <Router>
     <div className='App'>
      <Sidebar /> 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student" element={<Student />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/editstudent" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;