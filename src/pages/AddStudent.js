import React from 'react';
import '../styles/addstudent.css';
import {useState, useEffect} from 'react';

const AddStudent = () => {
  //State to hold form idata
  const [student, setStudent] = useState({
    first_name: '',
    last_name: '',
    email:'',
    date_of_birth: ''

  }
)
  
  
  // Handle input change
  const handlechange = (e) => {
   const { name, value} = e.target;
   setStudent((prevStudent) => ({
    ...prevStudent,
    [name]: value
   }));
  };
// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

 const url =  'http://localhost:9000/api/students' 

try {
 const response = await fetch(
  url, {
      method: 'POST',
      mode: 'cors',
      credentials:'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student), 
      
  });
  const result = await response.json();

  if (response.ok){
    alert("Student added successfully")
     // clear the form after submission
    setStudent({first_name:'', last_name:'', email:'', date_of_birth:''}); 
    } else {
      
         alert("Failed to add student. Status: " + response.status);
    }
   
  } catch (error) {
    console.error('Error adding student:', error);
    alert('Failed to add student due to network or server error.');
  }
};


  
  return (
    <div className='Addstudent'>
      <div>
     <h1>Add Student</h1>
     </div>

     <div>
  <form onSubmit={handleSubmit} >
    <div className='form1'>
    <label htmlFor="first_name">
        First Name: </label>
        <input
            type="text"
            name="first_name"
            value={student.first_name}
            onChange={handlechange} required
            
        />
    
    <label>
        Last Name: </label>
        <input
            type="text"
            name="last_name"
            value={student.last_name}
            onChange={handlechange} required
            
        />
  </div>
  <div className='form2'>
    <label>
        Email: </label>
        <input
            type="email"
            name="email"
            value={student.email}
            onChange={handlechange}
            required
            
        />
         <label>
        DoB: </label>
        <input
            type="Date"
            name="date_of_birth"
            value={student.date_of_birth}
            onChange={handlechange}
            required
            
        />
      </div>
    <button className='AddStudent'> Add Student</button>
    </form>
     </div>

    </div>


);

};



export default AddStudent;
