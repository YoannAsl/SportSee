import axios from 'axios';

export const getUserInfos = async (id) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

export const getUserPerformance = async (id) => {
	try {
		const res = await axios.get(
			`http://localhost:3000/user/${id}/performance`
		);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

export const getUserActivity = async (id) => {
	try {
		const res = await axios.get(
			`http://localhost:3000/user/${id}/activity`
		);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

export const getUserAverageSessions = async (id) => {
	try {
		const res = await axios.get(
			`http://localhost:3000/user/${id}/average-sessions`
		);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};
