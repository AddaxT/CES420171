var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var { ContactRouter } = require('./contact/routes');

mongoose.connect('mongodb://localhost:27017/contacts');
let app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
let contactRouter = new ContactRouter(app);

var server = app.listen(3000, function () {
    console.log(`Server listening on port ${server.address().port}`);
});