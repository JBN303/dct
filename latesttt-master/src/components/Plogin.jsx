import React, { useState } from 'react';
// import './animations.css';
// import './main.css';
// import './login.css';

const Plogin = () => {
  const [PatientEmail, setPatientEmail] = useState('');
  const [PatientPassword, setPatientPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <center>
       <div className="container">
      <form onSubmit={handleSubmit} >
        
        <p className="header-text">Welcome Back..!</p>
        <p className="sub-text">Login with your details to continue</p>
        <label htmlFor="PatientEmail" className="form-label">
          Email:
        </label>
        <input
          type="email"
          name="Patientemail"
          className="input-text"
          placeholder="Email Address"
          value={PatientEmail}
          onChange={(e) => setPatientEmail(e.target.value)}
          required
        />
        <label htmlFor="Patientpassword" className="form-label">
          Password:
        </label>
        <input
          type="password"
          name="Patientpassword"
          className="input-text"
          placeholder="Password"
          value={PatientPassword}
          onChange={(e) => setPatientPassword(e.target.value)}
          required
        />
        {error && <label className="form-label" style={{ color: 'rgb(255, 62, 62)', textAlign: 'center' }}>{error}</label>}
        <input type="submit" value="Login" className="login-btn btn-primary btn" />
        <p className="sub-text" style={{ fontWeight: '280' }}>
          Don't have an account? <a href="patient register" className="hover-link1 non-style-link">Sign Up</a>
        </p>
      </form>
    </div>
    </center>
  )
}

export default Plogin