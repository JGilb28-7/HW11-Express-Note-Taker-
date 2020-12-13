// using the HotResturant for the starting code
const { fstat } = require("fs");
const { dirname } = require("path");
const path = require("path")

//routing to the HTML
module.exports = function(app){
    //updates notes
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    //updates index
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
 }






