const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all employees
router.get('/', (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Add a new employee
router.post('/', (req, res) => {
    const { nationalNumber, firstName, lastName, email, passphrase, phoneNumber, isOwner } = req.body;
    db.query(
        'INSERT INTO employees (nationalNumber, firstName, lastName, email, passphrase, phoneNumber, isOwner) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nationalNumber, firstName, lastName, email, passphrase, phoneNumber, isOwner],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Employee added' });
        }
    );
});

module.exports = router;