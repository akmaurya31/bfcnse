module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
  const bank = require("../controllers/bank.controller.js");

  // Retrieve all Customers
  app.get("/Bank", bank.findAll);

  
  // Create a new Customer
  app.post("/customers", customers.create);

  // Retrieve all Customers
  app.get("/customers", customers.findAll);

  // Retrieve all Customers
  app.get("/customers", bank.findAll);



  // Retrieve a single Customer with customerId
  app.get("/customers/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/customers/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/customers", customers.deleteAll);
};
