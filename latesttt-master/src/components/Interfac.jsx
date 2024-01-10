import React from 'react';
import './animations.css';
import './main.css';
import './index.css';
import './nav.css';

function Interfac() {
  return (
    <div className="full-height">
      <center>
        <table border="11">
          <tbody>
            <tr>
              <td width="80%">
                <span className="edoc-logo">ADMIN PANEL</span>
                
              </td>
              {/* <td width="10%">
                <a href="Loginnav" className="non-style-link"><p className="nav-item">LOGIN</p></a>
              </td>
              <td width="10%">
                <a href="Signnav" className="non-style-link"><p className="nav-item" style={{ paddingRight: '10px' }}>REGISTER</p></a>
              </td>
            </tr> */}
          <td width="10%">
                <a href="doctorview" className="non-style-link"><p className="nav-item">DOCTOR VIEW</p></a>
              </td>
              <td width="10%">
                <a href="" className="non-style-link"><p className="nav-item" style={{ paddingRight: '10px' }}>PATIENT VIEW</p></a>
              </td>
              
             
            </tr>
            

            
            <tr>
              <td colSpan="5">
              </td>
            </tr>
          </tbody>
        </table>
        <p className="sub-text2 footer-hashen"></p>
      </center>
    </div>
  );
}

export default Interfac;