const sql = require("./db.js");

// constructor
const Bank = function(bank) {
  this.email = customer.email;
  this.name = customer.name;
  this.active = customer.active;
};
 

Customer.getAll = result => {
  sql.query("SELECT * FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
}; 

module.exports = Master;
