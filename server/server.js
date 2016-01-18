/**
 * Created by lizwestberg on 1/11/16.
 */

var express = require('express');
var app = express();
var index = require('./routes/index');
var path = require('path');

app.use('/', index);

app.use(express.static(path.join(__dirname, '/public')));

var server = app.listen(5000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

