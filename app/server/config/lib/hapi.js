'use strict';

const Hapi = require('hapi');
const inert = require('inert');
const chalk = require('chalk');


exports.connect = function (server) {
	server.connection({
		host: 'localhost',
		port: 3000
	});
};

exports.initServerRoutes = function (server) {
	server.register(inert, (err) => {
		if (err) {
			console.log(chalk.bgRed('Error registering inert'));
			throw err;
		}
		
		require(__rootdir + 'modules/catalogue/routes/catalogue.routes')(server);
	});
};


exports.init = function () {
	const server = new Hapi.Server();

	this.connect(server);
	this.initServerRoutes(server);

	server.route({
		method: 'GET',
		path: '/scripts/{file*}',
		handler: {
			directory: {
				path: 'public/scripts/'
			}
		}
	})

	return server;
};
