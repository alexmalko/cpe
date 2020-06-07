import React, { Fragment, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './components/routing/Routes';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import { connect } from 'react-redux';
import { fetchUser } from './actions/TEST_auth';

// Redux
import store from './store';

function App() {
	useEffect(() => {
		setAuthToken(localStorage.token);
		store.dispatch(loadUser());
	}, []);

	useEffect(() => {
		fetchUser();
	});

	return (
		<BrowserRouter>
			<Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route component={Routes} />
				</Switch>
			</Fragment>
		</BrowserRouter>
	);
}

export default connect(null, { fetchUser })(App);
