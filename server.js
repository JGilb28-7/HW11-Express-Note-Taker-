const express = require("express");
const fs = require("fs");
const path = require("path");



// Sets up the Express App used the Starwars and HotResturant as example
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// the Listener to start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  