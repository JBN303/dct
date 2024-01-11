import React, { useState } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';

const Admindash = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    const menuItem = [
      { path: "/", name: "Dashboard", icon: <DashboardIcon /> },
      { path: "/about", name: "About", icon: <DashboardIcon/>}, // Add your icon here
      { path: "/register", name: "Register", icon: null }, // Add your icon here
      { path: "/Doctordetails", name: "Doctor", icon: null }, // Add your icon here
      { path: "/Patientdetails", name: "Patient", icon: null }, // Add your icon here
    ];
  return (
    
    <Box sx={{ bgcolor: '#ffffff' }}>
    <List>
      <ListItem>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Administrator" secondary="DocereAdmin" />
      </ListItem>

      <ListItem button onClick={() => console.log('Log out')}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItem>

      {/* Other list items */}
      {menuItem.map((item, index) => (
        <NavLink to={item.path} key={index} className="link" activeClassName="active">
          <ListItem button>
            {item.icon && (
              <ListItemIcon>{item.icon}</ListItemIcon>
            )}
            <ListItemText primary={item.text} />
          </ListItem>
        </NavLink>
      ))}
    </List>

    <Box sx={{ p: 1 }}>
      <TextField
        fullWidth
        placeholder="Search Doctor name or Email"
        InputProps={{
          startAdornment: (
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          ),
        }}
      />
    </Box>
  </Box>
  )
}

export default Admindash
