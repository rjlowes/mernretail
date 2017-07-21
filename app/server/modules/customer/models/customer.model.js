'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let CustomerSchema = mongoose.Schema({
    email: String,
    password: String,
    title: String,
    firstname: String,
    lastname: String
});

/**
 * Generate a password hash
 */
CustomerSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/**
 *
 */
CustomerSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

<<<<<<< HEAD
/**
 * Returns customer data without password
 */
CustomerSchema.methods.getSafeCustomer = function () {
    let data = Object.assign({}, this.toJSON());
    delete data.password;
    return data;
};

=======
>>>>>>> c6ee886d1de3fa18295bb3e7f11e4525e1e7a9d3

exports = mongoose.model('Customer', CustomerSchema);

