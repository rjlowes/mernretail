'use strict';

const customer = require('../controllers/customer.controllers');


module.exports = function (app, passport) {

    app.route('/api/login')
        .post(customer.login);

    app.route('/api/register')
        .post(customer.register);
};