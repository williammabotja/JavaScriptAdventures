var express = require("express");
var app = express()

app.get('/', (req, res) => {
    res.send("Hello, World!");
});

app.listen(80, ()=> {
    console.log("Listening on Port 80");
});
