import React from "react";
import { Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
export default {
	fetchData: (dispatch) => async () => {
		dispatch({ type: "START_UNIT_FETCHING" });
		try {
			var response = await fetch("/api/units");
			var data = await response.json();
			dispatch({ type: "UNIT_FETCH_ALL", payload: data });
		} catch (error) {
			console.log(error);
		}
	},
	addUnit: (dispatch) => async (model) => {
		try {
			var response = await fetch("/api/units/add", {
				method: "post",
				body: JSON.stringify(model),
				headers: {
					"Content-Type": "application/json",
				},
			});
			var result = await response.json();
			if (!result.error) {
				dispatch({ type: "ADDED_UNIT", payload: result.data });
			} else {
				throw "Kapı numarası mevcut";
			}
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	updateUnit: (dispatch) => async (model) => {
		try {
			var response = await fetch("/api/units/update", {
				method: "post",
				body: JSON.stringify(model),
				headers: {
					"Content-Type": "application/json",
				},
			});
			var result = await response.json();
			if (!result.error) {
				dispatch({ type: "UPDATE_UNIT", payload: result.data });
			} else {
				console.log(result.error);
			}
		} catch (err) {}
	},
	changeStatus: (dispatch) => async ({ _id, status, doorNumber }) => {
		try {
			Modal.confirm({
				title: "Durumunu güncellemek istiyor musunuz?",
				icon: <ExclamationCircleOutlined />,
				onOk: async () => {
					var response = await fetch("/api/units/changeStatus", {
						method: "post",
						body: JSON.stringify(Object.assign({}, { _id, status })),
						headers: {
							"Content-Type": "application/json",
						},
					});
					var result = await response.json();
					if (!result.error) {
						dispatch({ type: "UPDATE_UNIT", payload: result.data });
					} else {
						console.log(result.message);
					}
				},
			});
		} catch (ex) {}
	},
	deleteUnit: (dispatch) => (_id) => {
		try {
			Modal.confirm({
				title: "Silmek istediğinize emin misiniz?",
				icon: <ExclamationCircleOutlined />,
				onOk: async () => {
					var response = await fetch("/api/units/delete", {
						method: "post",
						body: JSON.stringify({ _id }),
						headers: {
							"Content-Type": "application/json",
						},
					});
					var result = await response.json();
					if (!result.error) {
						dispatch({ type: "DELETE_UNIT", payload: result.data });
					} else {
						throw result.message;
					}
				},
			});
		} catch (err) {
			throw err;
		}
	},
};
