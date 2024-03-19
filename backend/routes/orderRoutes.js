const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create a new order
router.post('/orders', async (req, res) => {
  const { products, totalAmount } = req.body;
  const newOrder = new Order({ products, totalAmount });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
