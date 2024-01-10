import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@mui/material';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5007/api/login', {
        email: userEmail,
        cpass: userPassword,
      });

      navigate('/myapp');
      console.log(response.data);
      
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: 'white', padding: '20px' }}>
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Welcome Back!
        </Typography>
        <Typography>
          Login with your details to continue
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {error && (
            <Typography style={{ color: 'rgb(255, 62, 62)', textAlign: 'center' }}>
              {error}
            </Typography>
          )}
<Button
  type="submit"
  fullWidth
  variant="contained"
  sx={{ mt: 3, mb: 2 }}
  style={{ backgroundColor: '#77d5cb', color: 'white' }}
>
  Login
</Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2"  sx={{ mt: 3, mb: 2 }}
  style={{  color: '#77d5cb' }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" style={{  color: '#77d5cb' }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;