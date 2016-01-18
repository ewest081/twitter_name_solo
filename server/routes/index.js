/**
 * Created by lizwestberg on 1/11/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/index.html'))
});

router.get('/getNouns', function(request, response){
    response.sendFile(path.join(__dirname, '../../data/nouns.json'))
});

router.get('/getAdj', function(request, response){
    response.sendFile(path.join(__dirname, '../../data/adjectives.json'))
});

module.exports = router;