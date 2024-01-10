// DoctorList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:5007/api/doctors')
      .then(response => setDoctors(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
    <h2>Registered Doctors</h2>
    <table border="1">
      <thead>
        <tr>
          <th>NMC UID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Specialty</th>
          <th>Qualification</th>
          <th>Experience</th>
          <th>Language</th>
          <th>Location</th>
          <th>Appro consultation</th>
          <th>Consultation Type</th>
          <th>cirtificate</th>
          <th>Profile photo</th>
          <th>About </th>
          <th>Mobile numer</th>
          <th>Email</th>
          <th>password</th>
          <th></th>
          <th></th>
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {doctors.map(doctor => (
          <tr key={doctor._id}>
            <td>{doctor.uid}</td>
            <td>{doctor.name}</td>
            <td>{doctor.age}</td>
            <td>{doctor.spec}</td>
            <td>{doctor.edu}</td>
            <td>{doctor.exp}</td>
            <td>{doctor.lang}</td>
            <td>{doctor.locat}</td>
            <td>{doctor.conslt}</td>
            <td>{doctor.type}</td>
            <td>{doctor.cert}</td>
            <td>{doctor.pic}</td>
            <td>{doctor.about}</td>
            <td>{doctor.phn}</td>
            <td>{doctor.email}</td>
            <td>{doctor.cpass}</td>
            <td><Link to={`/edit-doctor/${doctor._id}`}>Edit</Link></td>
            <td> <Link to={`/delete-doctor/${doctor._id}`}>Delete</Link></td>
            
            
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default DoctorList;
