import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const CenteredContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'jibin johny' && password === 'jbn303') {
      // Redirect to admin dashboard on successful login
      navigate('/Side');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <CenteredContainer>
      <form>
        <Grid container direction="column" spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="h4">Admin Login</Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Grid>
          {errorMessage && (
            <Grid item>
              <Typography color="error">{errorMessage}</Typography>
            </Grid>
          )}
        </Grid>
      </form>
    </CenteredContainer>
  );
}

export default AdminLogin;
