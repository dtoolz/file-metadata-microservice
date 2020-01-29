var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());


app.listen(3000, ()=>{
    console.log('dtoolz server working');
});