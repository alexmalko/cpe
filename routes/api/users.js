const express = require('express');
const router = express.Router();
const gravatar = require('gravatar'); //package to grab gravatar from the email
const bcrypt = require('bcryptjs'); //to encrypt the user
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const User = require('../../models/User');
// @route    POST api/users
// @desc     Register user
// @access   Public
// creating a new User in the DB
router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(), //validation of the user input
		check('email', 'Please include a valid email').isEmail(), //validation of the user input
		check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }) //validation of the user input
	],
	async (req, res) => {
		//error handling if validation check failed
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body; //destructuring request

		try {
			// check if user already exists
			let user = await User.findOne({ email }); //find user by email in DB

			if (user) {
				return res.status(400).json({ errors: [ { msg: 'User already exists' } ] });
			}

			//grab gravatar
			const avatar = normalize(
				gravatar.url(email, {
					s: '200',
					r: 'pg',
					d: 'mm'
				}),
				{ forceHttps: true }
			);

			// creating new instance of the user in the database
			user = new User({
				name,
				email,
				avatar,
				password
			});

			//encrypting the user before saving user into the DB
			const salt = await bcrypt.genSalt(10); //creating a salt
			user.password = await bcrypt.hash(password, salt); //hashing the password

			//saving user into the database
			await user.save();

			// Jasonwebtoken authentication
			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(payload, config.get('jwtSecret'), { expiresIn: '5 days' }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);

module.exports = router;
