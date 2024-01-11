import React from 'react';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Interface() {
  const navigate = useNavigate();
  const clickHandle=()=>{
  navigate('/admin');
  }
  return (
    <Box className="full-height" sx={{ bgcolor: '#ffff', color: 'white' }}>
      <center>
        <Table border="0">
          <TableBody>
            <TableRow>
              <TableCell width="80%">
                <Typography variant="h4" gutterBottom>
                  Docere | companion
                </Typography>
              </TableCell>
              <TableCell width="10%">
                <Button variant="outlined" color="primary" onClick={clickHandle} style={{ marginRight: '20px' }}>
                  ADMIN
                </Button>
              </TableCell>
              <TableCell width="10%">
                <Button variant="outlined" color="primary">
                  LOGIN
                </Button>
              </TableCell>
              <TableCell width="10%">
                <Button variant="outlined" color="primary">
                  REGISTER
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan="3">
                <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
                  Your health is our commitment!
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan="9">
                <Typography variant="body1" gutterBottom>
                  Connect today and experience healthcare made easy. Whether you need medications, medical advice, or simply want to stay informed about healthcare options in your area,
                  we're here to serve you. Your health is our commitment!.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan="3">
                <center>
                  <Button variant="contained" color="secondary">
                    Make Appointment
                  </Button>
                </center>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan="3">
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant="body1" gutterBottom style={{ marginTop: '20px' }}>
          DEVELOPED BY ATHUL & JIBIN
        </Typography>
      </center>
    </Box>
  );
}

export default Interface;
