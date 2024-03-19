const Order = require('../models/Order');

// Controller function to create a new order
exports.createOrder = async (req, res) => {
  try {
    const { products, totalPrice, customer } = req.body;
    const order = new Order({ products, totalPrice, customer });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
