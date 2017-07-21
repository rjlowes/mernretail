'use strict';

const customer = require('../controllers/customer.controllers');


module.exports = function (app, passport) {

    app.route('/api/login')
        .post(customer.login);

    app.route('/api/register')
        .post(customer.register);
<<<<<<< HEAD

    app.route('/api/logout')
       .delete(customer.logout);

    app.route('/api/customer')
        .get(customer.details);
=======
>>>>>>> c6ee886d1de3fa18295bb3e7f11e4525e1e7a9d3
};