'use strict';

const path = require('path');
const passport = require('passport');


exports.register = function (req, res, next) {
    passport.authenticate('local-signup', (err, customer, info) => {
        console.log('pp authenticate');
        if (err) {
            return next(err);
        }

        if (!customer) {
            res.sendStatus(401);
        } else {
            // passport.authenticate() middleware invokes req.login() automatically.
            req.login(customer, (err) => {
                if (err) {
                    res.status(500).json({message: "Login failed"});
                } else {
                    res.status(200).json({'isAuthenticated': req.isAuthenticated(), 'customer': customer});
                }
            });
            
            // res.status(200).json({'isAuthenticated': req.isAuthenticated(), 'customer': customer});
        }
    })(req, res, next);
};

exports.login = function (req, res, next) {
    console.log('login route');
    passport.authenticate('local-login', (err, customer, info) => {
        if (err) return next(err);

        if (!customer) {
            res.sendStatus(401);
        } else {
            req.login(customer, () => {
                if(err) {
                    res.sendStatus(500).json({message: 'Login failed.'});
                } else {
                    res.status(200).json({'isAuthenticated': req.isAuthenticated()});
                }
            });
        }
    })(req, res, next);
};
