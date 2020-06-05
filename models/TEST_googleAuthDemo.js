// files related to GAuthFlow
const mongoose = require('mongoose');

// creating a schema for the user in the database
const gAuthSchema = new mongoose.Schema({
	googleId: String,
	credits: { type: Number, default: 0 }
});

mongoose.model('gAuth', gAuthSchema);
