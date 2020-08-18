import React from 'react';
import { Modal } from 'antd';

export default {
	fetchData: dispatch => async () => {
		dispatch({ type: 'ADD_LOADING' });
		try {
			const response = await fetch('api/users');
			const data = await response.json();
			dispatch({ type: 'USER_FETCH_ALL', payload: data })
		} catch (error) {
			console.log(error);
		}
	},

	addUser = dispatch => async (model) => {
		try {
			const response = await fetch('/api/users/add', {
				method: 'post',
				body: JSON.stringify(model),
				headers: { 'Content-Type': 'application/string' }
			});
			const result = await response.json();
			if (!result.error) {
				dispatch({ type: 'ADDED_USER', payload: result.data });
			} else {
				throw "Hata"
			}
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	
}