// models/doctorModel.js
const mongoose = require('mongoose');

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

module.exports = Doctor;
