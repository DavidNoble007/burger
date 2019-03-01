var connection = require("./connection.js");

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, values, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (burger_name, devoured) ";
    queryString += "VALUES (?,?)"
    console.log(queryString);

    var isDevoured = 0;
    if (values.devoured === "true") {
      isDevoured = 1;
    }

    connection.query(queryString, [values.burger_name, isDevoured], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function (table, id, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += " devoured = true ";
    queryString += " WHERE ";
    queryString += " id = " + id;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function (table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += devoured;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
