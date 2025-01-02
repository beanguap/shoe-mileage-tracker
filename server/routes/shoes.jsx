// server/routes/shoes.js
const router = require('express').Router();
const Shoe = require('../models/Shoe');

// Get all shoes
router.get('/', async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.json(shoes);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a shoe
router.post('/', async (req, res) => {
  try {
    const newShoe = new Shoe(req.body);
    await newShoe.save();
    res.status(201).json(newShoe);
  } catch (error) {
    res.status(500).json({ error: 'Could not create shoe' });
  }
});

module.exports = router;
