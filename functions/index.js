const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express=require('express');
const cors=require('cors');
const stripe=require('stripe')('sk_test_51JRhgwSFwu6QPAe6700Bn81rTLh01yaoAcUYTN6GZFnwlZbPuES9Nn36HOcvOfYVm3WHQkIheNS6RM5YUxusljEp00R0L2qRvP');

const app=express();
app.use(cors({ origin:true }));
app.use(express.json());


app.get('/',(req,res)=>res.status(200).send('hello world'))
// app.get('/parag',(req,res)=>res.status(200).send('hello parag'))

app.post('/payments/create', async (req,res) => {
  const total=req.query.total;
  console.log("Payment request recieved  ===>>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount:total,
    currency:"inr",
  });

  res.status(201).send({
    clientSecret:paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app)
