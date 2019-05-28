const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    pageTitle: 'Sign up',
    path: '/signup'
  })
}
exports.postSignup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  let user = await User.findOne({email});

  if (user) {
    return res.redirect('/signup');
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  user = new User({
    email,
    password: hashedPassword
  })
  await user.save();
  res.redirect('/login');
}

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    pageTitle: 'Login',
    path: '/login'
  })
}

exports.postLogin = (req, res, next) => {

}