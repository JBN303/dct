const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://jibinpjohny:jibinpjohny@cluster0.5wy66gv.mongodb.net/ddb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Schema and Model setup (Replace this with your schema)
const doctorSchema = new mongoose.Schema({
    uid: Number,
    name: String,
    age: Number,
    spec: String,
    edu: String,
    exp: Number,
    lang: String,
    locat: String,
    conslt: String,
    type: String,
    cert: String,
    pic: String,
    about: String,
    phn: Number,
    email: String,
    cpass: String,
});

const Doctor = mongoose.model('Doctor', doctorSchema);

// Route to handle saving doctor signup data
app.post('/dnew', (req, res) => {
  const newDoctor = new Doctor(req.body);
  newDoctor.save((err, savedDoctor) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(savedDoctor);
    }
  });
});

const PORT = process.env.PORT || 5007;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
