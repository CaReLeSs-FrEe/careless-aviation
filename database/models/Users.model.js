const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = (email) => emailRegex.test(email)

const UserLoginSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [ validateEmail, 'Please fill a valid email address' ],
    match: [ emailRegex, 'Please fill a valid email address' ]
  },
  password: {
    type: String,
    minLength: 8
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const UserLogin = mongoose.model('UserLogin', UserLoginSchema);

module.exports = UserLogin;