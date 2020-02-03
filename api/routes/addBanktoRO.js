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


router.post("/:id", async function(req, res, next) {
  console.log(req.params.id);
  console.log('customers/'+req.params.id +'/funding-sources');
    const customers = await client.post('customers/'+req.params.id +'/funding-sources', req.body).then(
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