var mongoose = require("mongoose");

var UnitSchema = new mongoose.Schema({
	doorNumber: Number,
	status: Boolean,
});

mongoose.model("Unit", UnitSchema);
