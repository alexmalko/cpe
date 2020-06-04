const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const key = require('./config/keys'); //bringing config file

//demo flow for passport JS
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//demo flow for passport JS

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// beggining of demo for passport JS
passport.use(
	new GoogleStrategy(
		{
			clientID: key.googleClientID,
			clientSecret: key.googleClientSecret,
			callbackURL: '/auth/google/callback',
			scope: 'email'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('accessToken', accessToken);
			console.log('refreshToken', refreshToken);
			console.log('profile', profile);
		}
	)
);

app.get('/auth/google', passport.authenticate('google'));

app.get('/auth/google/callback', passport.authenticate('google'));

// beggining of demo for passport JS

// web scraping tutorial
app.get('/web/scraping', (reg, res) => {
	res.send('hello word');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
