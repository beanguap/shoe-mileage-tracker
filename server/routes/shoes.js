// server/routes/shoes.js
const router = require('express').Router();

// Mock data
const mockShoes = [
  {
    id: 1,
    brand: 'Nike',
    model: 'Air Invincible Run 3',
    recommendedMiles: 500,
    currentMiles: 250
  },
  {
    id: 2,
    brand: 'Adidas',
    model: 'Ultraboost 21',
    recommendedMiles: 450,
    currentMiles: 100
  }
];

// Get all shoes
router.get('/', (req, res) => {
  try {
    if (mockShoes.length === 0) {
      return res.status(404).json({ message: 'No shoes found' });
    }
    res.json(mockShoes);
  } catch (error) {
    console.error('Error fetching shoes:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a shoe 
router.post('/', (req, res) => {
  try {
    const { brand, model, recommendedMiles } = req.body;
    if (!brand || !model || !recommendedMiles) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['brand', 'model', 'recommendedMiles']
      });
    }

    const newShoe = {
      id: mockShoes.length + 1,
      brand,
      model,
      recommendedMiles,
      currentMiles: 0
    };

    mockShoes.push(newShoe);
    res.status(201).json(newShoe);

  } catch (error) {
    console.error('Error creating shoe:', error);
    res.status(500).json({ error: 'Could not create shoe' });
  }
});

module.exports = router;