const Bank = require("../models/bank.model.js");

// Create and Save a new Customer
exports.bank = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  } 
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  data['asdfasdf','sdfasdf','sdfasdf'];
  res.send(data);
};  