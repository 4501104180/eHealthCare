const dbConfig = {
	mongoDbUri: process.env.MONGODB_URI,
};
const corsConfig = {
	whiteList: process.env.CORS_WHITELIST.split(','),
};

module.exports = { dbConfig, corsConfig };
