const stripe = require('stripe')('sk_test_qUEzPylxFU1m23ZcmMdDyGZh00VVeqA7BF');

// Token is created using Stripe Checkout or Elements!
// Get the payment token ID submitted by the form:
const token = request.body.stripeToken; // Using Express

(async () => {
  const charge = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    description: 'Example charge',
    source: token,
  });
})();

