const mpesa = require('../config/mpesaConfig'); // Import mpesa instance from mpesaConfig

/**
 * Mpesa Service to handle M-Pesa payments
 */
class MpesaService {
  /**
   * Lipa Na M-Pesa Online Payment
   * @param {object} paymentDetails - Payment details including phoneNumber, amount, etc.
   * @returns {Promise<object>} - M-Pesa response
   */
  static async lipaNaMpesaOnline(paymentDetails) {
    try {
      const payment = await mpesa.lipaNaMpesaOnline(paymentDetails);
      return payment;
    } catch (error) {
      throw new Error(`Mpesa Service Error: ${error.message}`);
    }
  }
}

module.exports = MpesaService;
