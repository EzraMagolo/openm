class MpesaService {
  static async initiateMpesaPayment(phoneNumber, amount, accountReference) {
    try {
      const response = await fetch('/api/mpesa/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, amount, accountReference }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error initiating M-Pesa payment:', error);
      throw new Error('Failed to initiate M-Pesa payment');
    }
  }

  static async registerUrls() {
    try {
      const response = await fetch('/api/mpesa/register', {
        method: 'POST',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error registering M-Pesa URLs:', error);
      throw new Error('Failed to register M-Pesa URLs');
    }
  }
}

export default MpesaService;
