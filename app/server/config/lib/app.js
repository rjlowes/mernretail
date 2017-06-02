'use strict';

var config = require('../config'),
	//express = require('./express'),
	hapi = require('./hapi'),
	mongoose = require('./mongoose'),
	chalk = require('chalk');


module.exports.init = function (callback) {
	
	mongoose.loadModels();

	mongoose.connect(function(db) {
		var server = hapi.init(db);
		if (callback) callback(server, db, config);
	});
};

module.exports.start = function (rootDir) {

	global.__rootdir = rootDir;

	this.init(function (server, db, config) {
		// app.listen(3000, function () {
		// 	console.log(chalk.green('The magic happens on port 3000'));
		// });

		// server.connection({
		// 	host: 'localhost',
		// 	port: 3000
		// });


		// server.route({
		// 	method: 'GET',
		// 	path: '/',
		// 	handler: function (req, res) {
		// 		return res('hello world');
		// 	}
		// });

		

		server.start((err) => {
			if(err) {
				console.log(chalk.bgRed('Error starting server: ' + err));
				throw err;
			}

			console.log(chalk.bgGreen('Server running at: ', server.info.uri));
		});
	});
};