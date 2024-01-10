const express = require('express');
const Doctor = require('../model/doctorModel');
const router = express.Router();

router.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/dnew', async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    const savedDoctor = await newDoctor.save();
    res.status(200).send(savedDoctor);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.put('/doctors/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json(updatedDoctor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
