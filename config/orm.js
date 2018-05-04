var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

      insertOne: function(table, col, val, cb) {
        var queryString = "INSERT INTO " + table + " ( burger, devoured ) VALUES ( ? , 0 )";
        connection.query(queryString, [val] , function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      // An example of objColVals would be {name: panther, sleepy: true}
      updateOne: function(table, devoured, idStatement, cb) {

        var queryString = "UPDATE " + table + " SET ? WHERE " + idStatement;
        connection.query(queryString, [devoured], function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
};

module.exports = orm;