const MpesaService = require('../services/mpesaService');

// Controller function to initiate Mpesa payment
exports.initiateMpesaPayment = async (req, res) => {
  try {
    const { phoneNumber, amount, accountReference } = req.body;
    // Call Mpesa service to initiate payment
    const paymentResult = await MpesaService.initiatePayment(phoneNumber, amount, accountReference);
    res.status(200).json(paymentResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
