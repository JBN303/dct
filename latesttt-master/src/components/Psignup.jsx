import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Psignup = () => {
    const [inputs, setInputs] = useState({
        "Name": '',
        "Address": '',
        "Phone": '',
        "Email": '',
        "Age": '',
        "Gender": '',
        "Username": '',
        "Password": '',
      });
    
      const navigate = useNavigate();
    
      const InputHandler = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
        console.log(inputs);
      };
    
      const SaveData = () => {
        axios.post("/api/patients", inputs) // Assuming '/api/patients' is the correct endpoint for patient creation
          .then((response) => {
            alert("Record Saved");
            // Optionally, you can navigate the user after successful data submission
            // navigate('/studentview')
          })
          .catch((err) => console.log(err));
      };
      
  return (
    
<center>
      <div className="container" style={{ animation: 'transitionIn-X 0.5s' }} >
        
        
        <table border="0" className="table">
          <tbody>
          <tr>
              <td colSpan="2">
                <p className="header-text">Let's Get Started</p>
                <p className="sub-text">It's Okey, Now Create User's Account.</p>
              </td>
            </tr>
            
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Name: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="Name" className="input-text" placeholder="mr"  onChange={InputHandler }  value={inputs.Name} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Address: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="Address" className="input-text" placeholder="ex: "  onChange={InputHandler }  value={inputs.Address} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Phone: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="Phone" className="input-text" placeholder="ex: 9712345678"  onChange={InputHandler } pattern="[0]{1}[0-9]{9}" value={inputs.Phone} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Email: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="Email" className="input-text" placeholder="ex: 9712345678"  onChange={InputHandler }  value={inputs.Email} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">AGE: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="Age" className="input-text" placeholder="ex: 9712345678"  onChange={InputHandler }  value={inputs.Age} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Gender: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="Gender" className="input-text" placeholder="ex: 9712345678"  onChange={InputHandler }  value={inputs.Gender} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Username: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="email" name="Username" className="input-text" placeholder="ex: 123@gmail.com"  onChange={InputHandler }  value={inputs.Username} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Password: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="password" name="Password" className="input-text" placeholder="ex: 9712345678"  onChange={InputHandler } value={inputs.Password} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="reset" value="Reset" className="login-btn btn-primary-soft btn" />
              </td>
              <td>
                <input type="submit" value="Sign Up" onClick={SaveData }  className="login-btn btn-primary btn" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <br />
                <label htmlFor="" className="sub-text" style={{ fontWeight: 280 }}>
                  Already have an account?
                  <a href="Login" className="hover-link1 non-style-link">
                    Login
                  </a>
                </label>
                <br /><br /><br />
              </td>
            </tr>

</tbody>
</table>
    </div>
    </center>
  )
}

export default Psignup