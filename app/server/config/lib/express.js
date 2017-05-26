'use strict';

const config = require('../config');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('session');
const cookieParser = require('cookie-parser');
const path = require('path');
const passport = require('passport');


exports.initMiddleware = function (app) {

};

exports.initViewEngine = function (app) {
	// Serve static files
	app.use(express.static(path.resolve('./public')));

	
};

exports.initSession = function (app) {

};

exports.initModulesServerRoutes = function (app, passport) {
	// Include last as it has a wild card route
	//require('../../modules/core/routes/core.routes')(app);

	// Other routes

	//  path must be absolute or specify root to res.sendFile
	app.use('*', function (req, res) {
	  res.sendFile('index.html');
	});
};

exports.initPassport = function (app) {

};

exports.init = function () {
	let app = express();

	this.initMiddleware(app);
	this.initViewEngine(app);
	this.initPassport(app);
	this.initModulesServerRoutes(app);

	return app;
};