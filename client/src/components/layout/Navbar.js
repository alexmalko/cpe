import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<Link to="/profiles">Developers</Link>
			</li>
			<li>
				<Link to="/posts">Posts</Link>
			</li>
			<li>
				<Link to="/dashboard">
					<i className="fas fa-user" /> <span className="hide-sm">Dashboard</span>
				</Link>
			</li>
			<li>
				<a onClick={logout} href="#!">
					<i className="fas fa-sign-out-alt" /> <span className="hide-sm">Logout</span>
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<Link to="/scraper">Scraper</Link>
			</li>
			<li>
				<Link to="/todo">Todo</Link>
			</li>
			<li>
				<Link to="/forms">Form</Link>
			</li>
			<li>
				<Link to="/color-boxes">Color Boxes</Link>
			</li>
			<li>
				<Link to="/profiles">Developers</Link>
			</li>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
			<li>
				<Link to="/test">Pokemon</Link>
			</li>
			<li>
				<a href="/dice">Dice</a>
			</li>
			<li>
				<a href="/auth/google">Login with Google</a>
			</li>
			<li>
				<a href="/api/logout">Logout</a>
			</li>
			<li>
				<a href="/billing">Billing</a>
			</li>
			<li>
				<a href="/coins">Coins</a>
			</li>
		</ul>
	);

	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/">
					<i className="fas fa-code" /> DevConnector
				</Link>
			</h1>
			{!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
