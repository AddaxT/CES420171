var express = require('express');
var bodyparser = require('body-parser');
var {ContactRouter} = require('./routes');
let app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
let contactRouter = new ContactRouter(app);

var server = app.listen(3000, function () {
    console.log(`Server listening on port ${server.address().port}`);
});