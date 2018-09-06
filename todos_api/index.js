
var express = require("express");
var app = express();


app.get("/", function(req, res) {
    res.send("HI THERE FROM EXPRESS");
});



app.listen(process.env.PORT, function() {
    console.log("APP IS RUNNING ON PORT " + process.env.PORT);
})
