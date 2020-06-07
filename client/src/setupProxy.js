const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
	app.use(
		[ '/auth/google', '/auth/facebook', '/api/current_user' ],
		createProxyMiddleware({
			target: 'http://localhost:5000'
		})
	);
};
