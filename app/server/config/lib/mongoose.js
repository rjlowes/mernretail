'use strict';

const config = require('../config');
const mongoose = require('mongoose');
const chalk = require('chalk');
const path = require('path');


exports.loadModels = function (callback) {
	require(path.join(__rootdir, '/modules/users/models/user.model'));
	require(path.join(__rootdir, '/modules/customer/models/customer.model'));
	require('../../modules/catalogue/models/category.model');
	
	if (callback) callback();
};


exports.connect = function (cb) {
	let db = mongoose.connect(config.db.url, err => {
		if (err) {
			console.log(chalk.bgRed('Could not connect to Mongoose'));
			console.log(chalk.bgRed(err));
		} else {
			mongoose.set('debug', config.db.debug);

			if (cb) cb(db);
		}
	});
};


exports.disconnect = function (callback) {
	mongoose.disconnect(err => {
		console.info(chalk.yellow('Disconnected from MongoDB'));
		
		if (callback) callback();
	})
};
