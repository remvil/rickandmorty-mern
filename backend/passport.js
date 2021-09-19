const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = '95d30169a59c418b52013315fc81bc99fdf0a7b03a116f346ab628496f349ed5';
module.exports = opts;
/**
 * Passport strategy for authenticating with a JWT
 * @param {*} passport 
 */
module.exports = passport => {
  passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) { return done(null, user); }
        return done(null, false)
      })
      .catch (err => console.log(err));
  }));
}