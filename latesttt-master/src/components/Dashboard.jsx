import React from 'react';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div>
     
    <div className="container">
      {/* ... Other JSX content ... */}
      
      <div className="menu">
        <table className="menu-container" border="0">
          {/* ... Menu content ... */}
        </table>
      </div>
      <div className="dash-body" style={{ marginTop: '15px' }}>
        <table border="0" width="100%" style={{ borderSpacing: 0, margin: 0, padding: 0 }}>
          {/* ... Other table content ... */}
          <tr>
            <td colSpan="4">
              <table width="100%" border="0" className="dashbord-tables">
                <tr>
                  <td>
                    {/* Upcoming Appointments Section */}
                  </td>
                  <td>
                    {/* Upcoming Sessions Section */}
                  </td>
                </tr>
                <tr>
                  <td width="50%">
                    {/* Upcoming Appointments Table */}
                  </td>
                  <td width="50%">
                    {/* Upcoming Sessions Table */}
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>
                      <a href="appointment" className="non-style-link">
                        <button className="btn-primary btn" style={{ width: '85%' }}>
                          Show all Appointments
                        </button>
                      </a>
                    </center>
                  </td>
                  <td>
                    <center>
                      <a href="schedule" className="non-style-link">
                        <button className="btn-primary btn" style={{ width: '85%' }}>
                          Show all Sessions
                        </button>
                      </a>
                    </center>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
