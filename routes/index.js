const router = require("express").Router();
const UserLogin = require('../database/models/Users.model')
const bcrypt = require("bcryptjs");
const saltRounds = 10;
// Start express app and create two endpoints:
// 1) get endpoint to display login
// 2) post endpoint to login




/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/login", (req, res, next) => {
  console.log(req.query.err);
  res.render("login", {err: req.query.err || false});
});

router.post("/verify", async (req, res, next) => {
  const userCount = await UserLogin.count({email: req.body.email, password: req.body.password})
  console.log(userCount, 'count')
  if (userCount === 0) res.redirect('/login?err=true') 
  else res.redirect('/')
});

router.get("/registry", (req, res, next) => {
  res.render("registry");
});

// router.post("/registry", (req, res, next) => {
//   res.redirect('/login')
// });

router.post("/registry", function (req, res, next) {
  if (!req.body.email || !req.body.password) {
    res.render("signup", { message: "Both fields are required" });
  }

  UserLogin.findOne({ email: req.body.email }).then((foundUser) => {
    if (foundUser) {
      res.render("signup", { message: "This Username is already taken" });
    } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPass = bcrypt.hashSync(req.body.password, salt);

      UserLogin.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPass,
      }).then((createdUser) => {
        res.render("login", {
          message: "You have created a new account",
        });
      });
    }
  });
});

module.exports = router;
