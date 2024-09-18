import React from 'react'
import '../styles/student.css';

const StudentRow = ({id, first_name, last_name, email, date_of_birth}) =>{
    return (
        <table className='pop'>
        <tbody>
     <tr >
        <td>{id}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
        <td>{date_of_birth}</td>

    </tr>
    </tbody>
    </table>
    );
}
export default StudentRow