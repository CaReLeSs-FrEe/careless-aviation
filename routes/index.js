const router = require("express").Router();

// Start express app and create two endpoints:
// 1) get endpoint to display login
// 2) post endpoint to login

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.post("/login", (req, res, next) => {
  // check mongo for login credentials accuracy
  // res.render("login");
});

module.exports = router;
