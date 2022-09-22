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
  // 1) check mongo for login credentials accuracy
  // 2.a) if credentials are accurate - go to their home page - res.render("home_page");
  // 2.b) if their crednetials are inaccurate - show an error page or error message by rendering  -> res.render("error");
});

router.get("/registry", (req, res, next) => {
  res.render("register");
});

module.exports = router;
