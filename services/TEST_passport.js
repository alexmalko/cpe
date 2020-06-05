// auth with passport JE
//demo flow for passport JS
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/TEST_keys'); //bringing config file
const mongoose = require('mongoose');

const User = mongoose.model('gAuth');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			scope: 'email'
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ facebookId: profile.id });

			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({ googleId: profile.id }).save();
			done(null, user);
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.FACEBOOK_APP_ID,
			clientSecret: keys.FACEBOOK_APP_SECRET,
			callbackURL: 'auth/facebook/callback',
			profileFields: [ 'email', 'name' ]
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ facebookId: profile.id });

			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({ facebookId: profile.id }).save();
			done(null, user);
		}
	)
);
