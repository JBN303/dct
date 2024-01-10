// patientRoutes.js

const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel');

router.post('/patients', async (req, res) => {
    try {
        const newPatient = await Patient.create(req.body);
        res.status(201).json({ message: 'Patient created successfully', data: newPatient });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create patient', error: error.message });
    }
});

module.exports = router;
