var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("semantic"));

app.get("/", function (req, res) {
    res.render("ibx");
});

app.listen(3000, "localhost", function () {
    console.log("The Server Has Started!");
});
