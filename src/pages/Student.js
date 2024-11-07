import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/student.css';
import StudentRow from '../pages/StudentRow';
import {useState, useEffect} from 'react';

function Student() {
  const [student, setStudent] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

 // delete student from the backend
 const handleDelete =(user_id) => {

  fetch(`http://localhost:8000/api/students/${user_id}`, {

       method: 'DELETE',
       mode: 'cors',
       credentials: 'same-origin',
       headers:  {
        accept: 'application/json'
       }
       
  })
    .then(resp => {
      return   resp.json()})
    .then(result => {
      if (result.status === 'ok') {
        // Filter the student list after deletion
         const filteredStudent = student.filter(student =>
         student.user_id !== user_id);
         setStudent(filteredStudent);
         alert("Student deleted")
      } else {
        alert("Student deletion failed");
      }
    })
    .catch((error) => {
     console.error('Error deleting student:',error);
     });
 }

  const navigate = useNavigate();

  // Fetch data from the backend API
  useEffect(() => {
    fetch('http://localhost:8000/api/students', {
       method: 'GET',
       mode: 'cors',
       credentials: 'same-origin',
       headers:  {
        accept: 'application/json',
       }
        
  })

    
      .then(resp => 
         resp.json())
     .then(results => {
      console.log(results); 
      setStudent(results.students || []);
    if (results.students && results.students.length > 0) {
      setSelectedStudent(results.students[0]);
      }
  })
  .catch(error => {
   console.error('Error fetching student data', error);
  });
  }, []);


    const handleClick = () => {
        navigate("/addstudent");
        
    };
    const handleClick1 = (user_id) => {
      navigate(`/editstudent/${user_id}`);
      
  };
  return ( 
    
    <div className='student'>
     <div className='Add'>
        <button className='AddButton' onClick={handleClick} >Add Students </button> 
     </div>
     
      
       <table className='table-header'>   
        <thead >
      <tr className='row'>
      <th>Student ID</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email address</th>
        <th>Date of Birth</th>
      </tr>
    </thead>
    <tbody className='pop'>
    
       {student && student.length > 0 ? (
       student.map((student) => (
        <div onClick={() => setSelectedStudent(student)} >
          {console.log(student)} 
        <StudentRow
           id={student.id}
           first_name = {student.first_name}
           last_name = {student.last_name}
           email = {student.email}
           date_of_birth = {student.date_of_birth}
           handleDelete={() => handleDelete(student.id)} 
        />
        </div>
      ))
    ) : (
      <p>No students found</p>
    )
    
     }
 
    </tbody>
    </table>
    
    
    <div className ='card0'>
    {selectedStudent && (
    <div>
      <h2>Student Info</h2>
        <div className='card1'>
          <h3>Student Name</h3>
          <p>{selectedStudent.first_name} {selectedStudent.last_name}</p>
        </div>
        <div className='card1'>
          <h3>Student ID</h3>
          <p>{selectedStudent.id}</p>
        </div>
        <div className='card1'>
          <h3>Email address</h3>
           <p>{selectedStudent.email}</p>
        </div>
        <div className='card1'>
          <h3>Date of Birth</h3>
          <p>  {selectedStudent.date_of_birth}</p>


        </div>
        </div>
        
        )}
</div>
        <div className='con'>
        <div className='Edit'>
        <button className='editstudent' onClick={() => handleClick1(selectedStudent?.id)} >Edit </button>
        </div>
        <div className='Delete'>
        <button className='deletestudent' onClick={() => handleDelete(selectedStudent?.id)}>Delete </button>
        </div>
        </div>
    </div>
  


  );

};

export default Student;