const User = require('../models/user');

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // See if user with email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }
    if (existingUser) {
      // If a user with email does exist, return an error
      return res.status(422).send({ error: "Email is in use" });
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });
    user.save(function(err) {
      if (err) { return next(err); }

      // Respond to request indicating the user was created
      res.json({ success: true });
    });
  });
}
