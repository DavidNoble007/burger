var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
// checking to see if this is working

router.post("/api/burgers", function (req, res) {


  console.log("hello", req.body)

  var cb = function (arr) {
    console.log("about to send back")
    res.json(arr)
  }

  burger.insertOne(req.body, cb)
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", req.params.id);
  burger.updateOne(req.params.id, function (data) {
    res.json(data)
  })

});


module.exports = router;
