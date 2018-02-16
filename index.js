var express = require ("express");
var app = express ();
var port = 8080;

app.get ("/", function (req, res) {
    res.writeHead (200, {"Content-Type" : "text/plain"});
    res.write ("Hello, node......");
    res.end ();
})

app.listen (port);