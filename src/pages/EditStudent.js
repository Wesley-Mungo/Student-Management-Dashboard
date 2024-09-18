import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/addstudent.css';

function EditStudent() {
  const { user_id } = useParams();  // Get student ID from route parameters
  const [student, setStudentData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    date_of_birth: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch student data from the backend using the ID
  useEffect(() => {
    fetch(`http://localhost:9000/api/students/${user_id}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((studentData) => {
        if (studentData) {
          setStudentData({
            first_name: studentData.first_name,
            last_name: studentData.last_name,
            email: studentData.email,
            date_of_birth: studentData.date_of_birth
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching student data');
        setLoading(false);
      });
  }, [user_id]);

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  // Handle form submission to update student
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:9000/api/students/${user_id}`, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 'ok') {
          alert('Student updated successfully');
          // Redirect to student list after update
          navigate('/students');
        } else {
          alert('Failed to update student');
        }
      })
      .catch((error) => {
        setError('Error updating student');
      });
  };

  if (loading) return <p className='row'>Loading student data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='Addstudent'>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className='form1'>
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={student.first_name}
            onChange={handleChange}
            required
          />
        
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={student.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form2'>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        
          <label>DoB</label>
          <input
            type="date"
            name="date_of_birth"
            value={student.date_of_birth}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Edit Student</button>
      </form>
    </div>
  );
}

export default EditStudent;
