import React from 'react';
import '../styles/dashboard.css';
import icons1 from '../components/Images/icons1.png';
import icons2 from '../components/Images/icons2.png';
import icons3 from '../components/Images/icons3.png';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/addstudent");
      
  };
  const handleClick1 = () => {
    navigate("/editstudent");
    
};
const handleClick2 = () => {
  navigate("/student");
  
};

  return (
    <div className='dashboard'>
        <div className='header-1'>
        <h1 className='header'>Welcome to the Students Dashboard</h1>
        </div>
        <div className='title2'>
        <h3 className='title'>Here is how you can manage students</h3>
        </div>
        <div className='view'>
        <div className='list'>
        <img src={icons3} alt='icon' className='logo1' /> 
        <a href='/student' className='list--item'> <h3>View All students</h3></a>
        </div>
        <div className='items'>
        <p>View all the students stored in our database</p>
        </div>
        <div className='list'>
        <img src={icons1} alt='icon' className="logo1" />
        <a href='/addstudent' className='list--item'> <h3>Add Student</h3></a>
        </div>
        <div className='items'>
        <p>Add other student to the system</p>
        </div>
        <div className='list'>
        <img src={icons2} alt='icon' className="logo1" />
        <a href='/editstudent' className='list--item'> <h3>Edit and Delete student</h3></a>
        </div>
        <div className='items'>
        <p>You can also edit and delete users on the system</p>
        </div>
      
        </div>

        
        
    </div>



  );

};

export default Dashboard;