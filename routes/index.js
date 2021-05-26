var express = require('express');
var router = express.Router();
const ArgonauteModel = require("./../models/Argonaute");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Argonautes'
  });
});


router.get("/add-argonaute", (req, res) => {
  ArgonauteModel.find()
    .then((argonautes) => {
      res.render("index.html", {
        argonautes
      })
    })
    .catch((error) => {
      console.log(error, "error :(");
    });
});


router.post("/add-argonaute", async (req, res) => {
  console.log(req.body);
  const {
    name
  } = req.body;
  console.log(name);
  try {
    await ArgonauteModel.create({
      name
    });
    console.log("argonaute onboarded :D");
  } catch (err) {
    console.log("error :(");
  }
});


module.exports = router;