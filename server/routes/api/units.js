var router = require("express").Router();
var mongoose = require("mongoose");
const { resolve } = require("path");

var Unit = mongoose.model("Unit");

router.get("/", async (req, res) => {
	var data = await Unit.find().exec();
	res.json(data);
});

router.post("/add", async (req, res) => {
	var model = req.body;
	var result = {};
	await new Promise((resolve) => setTimeout(resolve, 1500));
	try {
		var count = await Unit.countDocuments({ doorNumber: model.doorNumber });
		if (!count) {
			var unit = await new Unit(model).save();
			result.error = false;
			result.data = unit;
		} else {
			result.error = true;
			result.message = "Kapı numarısı mevcut";
		}
	} catch (err) {
		result.error = true;
		result.message = err;
	}
	res.json(result);
});

router.post("/changeStatus", async (req, res) => {
	const { _id, status } = req.body;
	var result = {};
	await new Promise((resolve) => setTimeout(resolve, 1500));
	try {
		var doc = await Unit.findOneAndUpdate(
			{ _id },
			{ status: !status },
			{ new: true }
		);
		result.error = false;
		result.data = doc;
	} catch (err) {
		result.error = true;
		result.message = err;
	}
	res.json(result);
});

router.post("/update", async (req, res) => {
	const { _id, ...model } = req.body;
	var result = {};
	await new Promise((resolve) => setTimeout(resolve, 1500));
	try {
		var doc = await Unit.findOneAndUpdate({ _id }, { ...model }, { new: true });
		result.error = false;
		console.log(doc);
		result.data = doc;
	} catch (err) {
		result.error = true;
		result.message = err;
	}
	res.json(result);
});

router.post("/delete", async (req, res) => {
	const { _id } = req.body;
	var result = {};
	try {
		var doc = await Unit.deleteOne({ _id: _id });
		result.data = _id;
		result.error = doc.deletedCount > 0 ? false : true;
	} catch (err) {
		result.error = true;
		result.message = err;
	}
	console.log(result);
	console.log(doc);
	res.json(result);
});

module.exports = router;
