import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API = 'https://api.randomuser.me/';

function User() {
	const [user, setUser] = useState(null);

	async function getUser() {
		const response = await axios.get(API);
		const user = response.data.results[0];
		return user;
	}

	useEffect(() => {
		getUser().then(user => setUser(user));
	}, []);

	return (
		<div>
			<h2>User</h2>
			{user ? user.name.first : null}
		</div>
	);
}

export default User;
