var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
var myUpload = multer({dest:'uploads/'});

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());


//a get a request to connect server side to html
// app.get('/', (req,res,next)=>{
//     res.sendFile(__dirname + "/index.html");
// }); a single file method
app.use(express.static(__dirname + "/public"));


//a post request
app.post('/uploading', myUpload.single('file'), (req,res,next)=>{
    return res.json(req.file);
});


app.listen(3000, ()=>{
    console.log('dtoolz server working');
});