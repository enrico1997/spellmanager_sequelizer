// Our Spells controller
// =====================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.
var express = require("express");

var router = express.Router();
// edit spell model to match sequelize
var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/spells");
});

// get route, edited to match sequelize
router.get("/spells", function(req, res) {
  // replace old function with sequelize function
  db.Spell.findAll()
    // use promise method to pass the spells...
    .then(function(dbSpell) {
      // console.log(dbSpell);
      // into the main index, updating the page
      var hbsObject = { spell: dbSpell };
      return res.render("index", hbsObject);
    });
});

// post route to create spells
router.post("/spells/create", function(req, res) {
  // edited spell create to add in a spell_name
  db.Spell.create({
    spell_name: req.body.spell_name
  })
    // pass the result of our call
  .then(function(dbSpell) {
      // log the result to our terminal/bash window
    // console.log(dbSpell);
      // redirect
    res.redirect("/");
  });
});

// put route to cast a spell
router.put("/spells/update", function(req, res) {
  // update one of the spells
  db.Spell.update({
    cast: true
  },
    {
      where: {
        id: req.body.spell_id
      }
    }
  ).then(function(dbSpell) {
    res.redirect("/");
  });
});

module.exports = router;
