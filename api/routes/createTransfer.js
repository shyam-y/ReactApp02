var express = require('express');
var router = express.Router();
var dwolla = require('dwolla-v2');

var appKey = 'JEOdM9UAfa5EtDwZptSSJ1BZqKJttYnM2F3RH2mtfl3PwKsRXh';
var appSecret = 'wbRyduGrkqphA7xMneLu1c9et18JOoxcjK1qE4WpDoQzGLq3GL';
var client = new dwolla.Client({
  key : appKey,
  secret : appSecret,
  environment : 'sandbox'
});

// var trans = {
//     "_links": {
//         "source": {
//             "href": "https://api-sandbox.dwolla.com/funding-sources/db264196-499a-43a5-a163-27fc040a1877"
//         },
//         "destination": {
//             "href": "https://api-sandbox.dwolla.com/funding-sources/cd8e836f-c126-4b43-8c75-3a651ae44790"
//         }
//     },
//     "amount": {
//         "currency": "USD",
//         "value": "1.00"
//     }
// } 

router.post("/", async function(req, res, next) {

    const customers = await client.post('transfers', req.body).then(
      async function(results) {      
        // return await JSON.stringify(results.body);
        console.log(results.body)
      },
      function(error) {
        return error;
      }
    ); 
    res.send(customers);
  });

  module.exports = router;












// client.auth.client()
//   .then(function(appToken) {
//     return appToken.get('/');
//   })
//   .then(function(res) {
//     console.log(JSON.stringify(res.body));
//   });