const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

// part of GAuthFlow with Passport
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/TEST_keys');
require('./models/TEST_googleAuthDemo'); //just require because we dont return anything
require('./services/TEST_passport'); //just require because we dont return anything

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
// thandling cookies with for passport
// app.use is the middleware call
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [ keys.cookieKey ]
	})
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/TEST_authPassport')(app); //requiting and calling route at the same time

// web scraping tutorial
app.get('/web/scraping', (reg, res) => {
	res.send('hello word');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
