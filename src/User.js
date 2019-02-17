// Using useState hook

import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API = 'https://api.randomuser.me/';

/**
 * Merge new state with old state
 * Sort of creating normal setState()
 */
function useMergeState(initialState) {
	const [state, setState] = useState(initialState);
	const setMergedState = newState =>
		setState(prevState => ({ ...prevState, ...newState }));

	return [state, setMergedState];
}

function User() {
	const [userState, setUserState] = useMergeState({ user: null, loading: true });

	useEffect(() => {
		axios.get(API).then(res => {
			setUserState({
				user: res.data.results[0],
				loading: false
			});
		});
	}, []);

	const { loading, user } = userState;
	if (loading) {
		return <div>...Loading</div>;
	}

	return (
		<div>
			<h2>User</h2>
			<p>{user.name.first}</p>
		</div>
	);
}

export default User;
