const express = require('express');
const router = express.Router();
const Mpesa = require('mpesa-node');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize M-Pesa client
const mpesa = new Mpesa({
  consumerKey: process.env.MPESA_CONSUMER_KEY,
  consumerSecret: process.env.MPESA_CONSUMER_SECRET,
  environment: process.env.MPESA_ENVIRONMENT, // Change to 'production' for live environment
});

// Register callback URL with M-Pesa
router.post('/mpesa/register', async (req, res) => {
  try {
    // Register the validation and confirmation URLs with M-Pesa
    const response = await mpesa.registerUrls({
      validationUrl: process.env.MPESA_VALIDATION_URL,
      confirmationUrl: process.env.MPESA_CONFIRMATION_URL,
      responseType: 'Cancelled',
      shortCode: process.env.MPESA_SHORTCODE,
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Receive M-Pesa payments
router.post('/mpesa/payments', async (req, res) => {
  const { phoneNumber, amount, accountReference } = req.body;

  try {
    // Check if required fields are provided
    if (!phoneNumber || !amount || !accountReference) {
      return res.status(400).json({ message: 'Please provide phoneNumber, amount, and accountReference' });
    }

    // Initiate M-Pesa payment
    const payment = await mpesa.lipaNaMpesaOnline({
      phoneNumber,
      amount,
      accountReference,
      transactionDesc: 'Payment for Order',
    });

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Handle M-Pesa callbacks
router.post('/mpesa/callback', (req, res) => {
  const { MpesaResponseCode, MpesaResponseDesc, MpesaTransactionID, MpesaTransactionAmount, MpesaPhoneNumber } = req.body;

  // Handle M-Pesa response based on response code
  if (MpesaResponseCode === '0') {
    // Payment was successful
    console.log(`Payment of ${MpesaTransactionAmount} received from ${MpesaPhoneNumber} with transaction ID ${MpesaTransactionID}`);
  } else {
    // Payment was unsuccessful
    console.log(`Payment from ${MpesaPhoneNumber} with transaction ID ${MpesaTransactionID} was unsuccessful: ${MpesaResponseDesc}`);
  }

  // Send a response to M-Pesa to acknowledge receipt of the callback
  res.status(200).send('Success');
});

module.exports = router;
