const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');

passport.use(new LocalStrategy(async (username, password, done) => {
    const user = await User.findAll({ where: { username: username, password: password } });
    if (user) return done(null, user);
    else return done(null, false, { message: 'false' });
}));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});


passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

module.exports = passport;