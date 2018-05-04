// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(col, val, cb) {
    orm.insertOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  update: function(devoured, idStatement, cb) {
    orm.updateOne("burgers", devoured, idStatement, function(res) {
      cb(res);
    });
  },
  delete: function(idStatement, cb) {
    orm.deleteOne("burgers", idStatement, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;