const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51KKMZCCDOmd2n0ecRP17gku9THqcloXkra1ukBl4feGy566qk9hUx4OEcSomXcN3aVcRQfFFk6jF0WrMBxAkS2QM00SfozSg90');

// API

// - App config
const app = express();

// - Middleware
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('payment request received for this amount -> ', total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: 'usd'
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
