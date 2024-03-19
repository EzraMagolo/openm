const Mpesa = require('mpesa-node');

const mpesa = new Mpesa({
  consumerKey: process.env.MPESA_CONSUMER_KEY,
  consumerSecret: process.env.MPESA_CONSUMER_SECRET,
  environment: process.env.MPESA_ENVIRONMENT,
  shortCode: process.env.MPESA_SHORTCODE,
  lipaNaMpesaShortCode: process.env.MPESA_LNM_SHORTCODE,
  lipaNaMpesaShortPass: process.env.MPESA_LNM_PASSKEY,
  queueTimeoutUrl: process.env.MPESA_QUEUE_TIMEOUT_URL,
  resultUrl: process.env.MPESA_RESULT_URL,
  validationUrl: process.env.MPESA_VALIDATION_URL,
  confirmationUrl: process.env.MPESA_CONFIRMATION_URL,
  stkCallbackUrl: process.env.MPESA_STK_CALLBACK_URL,
});

module.exports = mpesa;
