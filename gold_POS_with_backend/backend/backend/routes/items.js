const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all items
router.get('/', (req, res) => {
    db.query('SELECT * FROM items', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Add a new item
router.post('/', (req, res) => {
    const { name, vendor, cost, date } = req.body;
    db.query(
        'INSERT INTO items (name, vendor, cost, date) VALUES (?, ?, ?, ?)',
        [name, vendor, cost, date],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Item added', itemId: result.insertId });
        }
    );
});

module.exports = router;