// Using useReducer hook

import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
const API = 'https://api.randomuser.me/';

function User() {
	const [userState, setUserState] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{ user: null, loading: true }
	);

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
