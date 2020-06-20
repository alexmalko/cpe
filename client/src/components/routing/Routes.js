import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import ProfileForm from '../profile-forms/ProfileForm';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import Test from '../layout/test/Pokemon_Prop_Exer/Pokemon';
import PrivateRoute from '../routing/PrivateRoute';
import TEST_Billing from '../layout/test/Billing/TEST_Billing';
import RollDice from '../layout/test/Die _Roll/RollDice';
import CointContainer from '../layout/test/coin_flip/CointContainer';
import ColorBoxes from '../layout/test/Color_boxes/ColorBoxes';
import Forms from '../layout/test/Forms/Root';
import Todo from '../layout/test/Todo/Root';
import Scraper from '../layout/test/scraper/Root';

const Routes = (props) => {
	return (
		<section className="container">
			<Alert />
			<Switch>
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/profiles" component={Profiles} />
				<Route exact path="/profile/:id" component={Profile} />
				<Route exact path="/test" component={Test} />
				<Route exact path="/billing" component={TEST_Billing} />
				<Route exact path="/dice" component={RollDice} />
				<Route exact path="/coins" component={CointContainer} />
				<Route exact path="/color-boxes" component={ColorBoxes} />
				<Route exact path="/forms" component={Forms} />
				<Route exact path="/todo" component={Todo} />
				<Route exact path="/scraper" component={Scraper} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<PrivateRoute exact path="/create-profile" component={ProfileForm} />
				<PrivateRoute exact path="/edit-profile" component={ProfileForm} />
				<PrivateRoute exact path="/add-experience" component={AddExperience} />
				<PrivateRoute exact path="/add-education" component={AddEducation} />
				<PrivateRoute exact path="/posts" component={Posts} />
				<PrivateRoute exact path="/posts/:id" component={Post} />
				<Route component={NotFound} />
			</Switch>
		</section>
	);
};

export default Routes;
