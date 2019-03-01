var orm = require("../config/orm.js");
var burgermodel = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (values, cb) {
        orm.insertOne("burgers", values, cb);
    },


    updateOne: function (id, cb) {
        orm.updateOne("burgers", id, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};


module.exports = burgermodel;