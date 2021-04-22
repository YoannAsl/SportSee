import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000/user',
});

export const getUserInfos = async (id) => {
	try {
		const res = await instance.get(`/${id}`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

export const getUserPerformance = async (id) => {
	try {
		const res = await instance.get(`/${id}/performance`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

export const getUserActivity = async (id) => {
	try {
		const res = await instance.get(`/${id}/activity`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

export const getUserAverageSessions = async (id) => {
	try {
		const res = await instance.get(`/${id}/average-sessions`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};
