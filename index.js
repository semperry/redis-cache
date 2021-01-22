const express = require("express");

const checkKey = require("./middleware/checkKey");
const swapiRoutes = require("./routes/swapiRoutes");

const port = process.env.PORT || 4000;
const app = express();

app.use([checkKey, swapiRoutes]);

app.listen(port, () => {
	console.log(`Redis cache server running on port ${port}`);
});
