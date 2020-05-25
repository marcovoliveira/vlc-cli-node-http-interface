const vlcControler = require("./vlcController.js");

// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

app.get('/', function(req, res) {
    let param = req.param("command");
    console.log(param)
    if (isNaN(param)){
        console.log("string")
        vlcControler.run(param)
    }else{
        param = parseInt(param)
        console.log(param)
        console.log(Math.sign(param))
        if(Math.sign(param) == 1) {
            console.log("numero positivo")
            vlcControler.run("volup "+ param)
        } else {
            console.log("numero negativo")
            param = Math.abs(param)
            vlcControler.run("voldown "+ param)
        }
    }
    res.send("done");
  });