"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by iong on 24.10.2017.
 */
var express = require("express");
var hbs = require("hbs");
var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
    var now = new Date().toString();
    console.log(now + ": " + req.method + ", " + req.url);
    next();
});
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', function () { return new Date().getFullYear(); });
hbs.registerHelper('screamIt', function (text) { return text.toUpperCase(); });
app.get('/', function (req, res) {
    // res.send('<h1>Hello express</h1>')
    res.render('home.hbs', {
        pageTitle: 'Home page',
        message: 'Welcome',
        currentYear: new Date().getFullYear()
    });
});
app.get('/about', function (req, res) {
    res.render('about.hbs', {
        pageTitle: 'About page',
    });
});
app.listen(port, function () { return console.log("Server listening on " + port); });
//# sourceMappingURL=server.js.map