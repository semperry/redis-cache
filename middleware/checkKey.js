// Wouldn't be hardcoded like this...
const apiKeys = new Map();
apiKeys.set("12345");
apiKeys.set("123456");

const blacklist = ["123456"];

const checkKey = (req, res, next) => {
	// You can require the api key however you see fit. Maybe by query, maybe by header...
	const key = req.query.key || req.get("X-API-KEY");

	if (apiKeys.has(key) && !blacklist.includes(key)) {
		return next();
	} else if (blacklist.includes(key)) {
		return res.status(401).json({
			message:
				"Your key has been revoked temporarily. Contact Admin for more info.",
		});
	} else {
		return res.status(401).json({ message: "Invalid API Key" });
	}
};

module.exports = checkKey;
