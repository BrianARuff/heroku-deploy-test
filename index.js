require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT;
const instance = server.listen(port, () =>
	console.log(`\n=== API running on port: ${instance.address().port} ===\n`)
);