// patientModel.js

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    Name: String,
    Address: String,
    Phone: String,
    Email: String,
    Age: String,
    Gender: String,
    Username: String,
    Password: String,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;

