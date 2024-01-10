import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Box, Typography, Container, CssBaseline, createTheme, ThemeProvider} from '@mui/material';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#77d5cb',
    },
  },
});

function SignUp() {

  var [inputs,setInputs] = useState({
    "uid":'',
    "name":'',
    "age":'',
    "spec":'',
    "edu":'',
    "exp":'',
    "lang":'',
    "locat":'',
    "conslt":'',
    "type":'',
    "cert":'',
    "pic":'',
    "about":'',
    "phn":'',
    "email":'',
    "cpass":'',

    })

   const navigate = useNavigate();

  const InputHandler = (event) => {
    const {name,value} = event.target
    setInputs((inputs) => ({...inputs,[name]:value}))
    console.log(inputs)
  }

  const SaveData = () => {
    axios.post("http://localhost:5007/api/dnew", inputs) //axios.post("http://localhost:4007/dnew", inputs)
      .then((response) => {
        alert("Record Saved successfully");
        navigate('/login');
      })
      .catch(err => console.log(err));
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" style={{ backgroundColor: 'white', padding: '20px' }}>
        <CssBaseline />
        <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5">
            Let's Get Started
          </Typography>
          <Typography>
            It's Okey, Now Create doctor's Account.
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="uid"
                  label="NMC UID"
                  name="uid"
                  autoComplete="uid"
                  autoFocus
                  value={inputs.uid}
                  onChange={InputHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  value={inputs.name}
                  onChange={InputHandler}
                />
                </Grid>
                </Grid>
                <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              autoComplete="age"
              value={inputs.age}
              onChange={InputHandler}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="spec"
              label="Specialties"
              name="spec"
              autoComplete="spec"
              value={inputs.spec}
              onChange={InputHandler}
            />
             </Grid>
                </Grid>
                <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="edu"
              label="Qualification"
              name="edu"
              autoComplete="edu"
              value={inputs.edu}
              onChange={InputHandler}
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="exp"
              label="Experience"
              name="exp"
              autoComplete="exp"
              value={inputs.exp}
              onChange={InputHandler}
            />
            </Grid>
         </Grid>
             <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="lang"
              label="Language"
              name="lang"
              autoComplete="lang"
              value={inputs.lang}
              onChange={InputHandler}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="locat"
              label="Location"
              name="locat"
              autoComplete="locat"
              value={inputs.locat}
              onChange={InputHandler}
            />
            </Grid>
         </Grid>
         <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="conslt"
              label="Approximate consultation"
              name="conslt"
              autoComplete="conslt"
              value={inputs.conslt}
              onChange={InputHandler}
            /> 
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="type-label">Consultation Type</InputLabel>
              <Select
                labelId="type-label"
                id="type"
                name="type"
                value={inputs.type}
                onChange={InputHandler}
              >
                <MenuItem value="online">Online Consultation</MenuItem>
                <MenuItem value="inclinic">In-Clinic Consultation</MenuItem>
                <MenuItem value="Both">Both</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            </Grid>
           
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="phn"
              label="Mobile Number"
              type="number"
              id="phn"
              value={inputs.phn}
              onChange={InputHandler}
            />
            </Grid>
             <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={inputs.email}
              onChange={InputHandler}
            />
             </Grid>
             </Grid>
             <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="npass"
              label="New Password"
              type="password"
              id="npass"
            />
              </Grid>
           
              <Grid item xs={12} sm={6}>
          
            <TextField
              margin="normal"
              required
              fullWidth
              name="cpass"
              label="Confirm Password"
              type="password"
              id="cpass"
              value={inputs.cpass}
              onChange={InputHandler}
            />
             </Grid>
             </Grid>
            {Error && (
              <FormHelperText error>
                {Error}
              </FormHelperText>
            )}
<TextField
              margin="normal"
              required
              fullWidth
              id="about"
              label="About You"
              name="about"
              multiline
              
              rows={4}
              value={inputs.about}
              onChange={InputHandler}
            />
<Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              component="label"
            >
              Upload Certificate
              <input
                type="file"
                hidden
                name="cert"
                onChange={InputHandler}
              />
            </Button>
            </Grid>
            <Grid item xs={10} sm={6}>
            <Button
              variant="contained"
              component="label"
            >
              Upload Profile Photo
              <input 
                type="file"
                hidden
                name="pic"
                onChange={InputHandler}
              />
            </Button>
            </Grid>  </Grid>


            <Button
              type="reset"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              onClick={SaveData}
            >
              Sign Up
            </Button>
            <Box mt={5}>
              <Typography variant="body2" color="text.secondary" align="center">
                {'Already have an account? '}
                <Link href="#" variant="body2">
                  {'Login'}
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;