var router = require("express").Router();
var path = require("path");

router.use("/api", require("./api"));

router.get("*", (req, res) => {
	if (process.env.NODE_ENV == "development") {
		res.send("Running Development Mode");
	} else {
		res.sendFile(path.join(__dirname, "build/index.html"));
	}
});

module.exports = router;
