var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();

const mongodbUrl = process.env.MONGOURL;

mongoose
	.connect(mongodbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("connected");
	})
	.catch((err) => {
		console.log(err);
	});
mongoose.set("useFindAndModify", false);

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.raw());

app.use(express.static(path.join(__dirname, "build")));

require("./models/Unit");

app.use(require("./routes"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log("Express app listening on port " + port);
});
