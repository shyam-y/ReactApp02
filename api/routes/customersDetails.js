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

router.get("/", async function(req, res, next) {
    const customers = await client.get("customers", { limit: 100 }).then(
      async function(results) {      
        return await JSON.stringify(results.body._embedded.customers);
      },
      function(error) {
        return error;
      }
    ); 
    res.send(customers);
  });

  module.exports = router;

  /**
   * router.get("/", async function(req, res, next)) {
   *  const token = await client.get("token").then(
   *    async function(results) {
   *      return await JSON.stringify(results.body._embedded.token);
   *    },
   * 
   *    function(error) {
        return error;
      }
   *   
   *  );
   * 
   * res.send(token);
   * }
   */