import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function TEST_Billing() {
	return (
		<div>
			<StripeCheckout amount={500} stripeKey={process.env.REACT_APP_STRIPE_KEY} />
		</div>
	);
}
