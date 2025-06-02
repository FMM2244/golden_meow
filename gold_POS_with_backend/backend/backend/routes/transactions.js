const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all transactions
router.get('/', (req, res) => {
    db.query('SELECT * FROM transactions', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Add a transaction
router.post('/', (req, res) => {
    const { employeeId, totalPrice, t_type, items } = req.body;

    db.query(
        'INSERT INTO transactions (employeeId, totalPrice, t_type) VALUES (?, ?, ?)',
        [employeeId, totalPrice, t_type],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });

            const transactionId = result.insertId;
            const values = items.map(item => [transactionId, item.itemId, item.sellingPrice, item.makingCharge]);

            db.query(
                'INSERT INTO transaction_items (transactionId, itemId, sellingPrice, makingCharge) VALUES ?',
                [values],
                (err2) => {
                    if (err2) return res.status(500).json({ error: err2 });
                    res.status(201).json({ message: 'Transaction added' });
                }
            );
        }
    );
});

module.exports = router;