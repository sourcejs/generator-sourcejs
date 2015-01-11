// NodeJS module, included automatically from app.js
// ExpressJS middleware http://expressjs.com

var processRequest = function (req, res) {
    // Process res data
};

exports.process = function (req, res, next) {
    processRequest(req, res);

    next();
};