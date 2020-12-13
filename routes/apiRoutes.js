//Load Data - Should read the `db.json
const db = require("../db/db.json")
//retrieve notes using the `fs` module. // will need to add fs
const fs = require("fs")

module.exports = function(app) {
//* The following API routes should be created:

    fs.readFile("db/db.json", "utf8", function(err, data) {
        if (err) throw err;
        const notes = JSON.parse(data);
    //* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
        app.get("/api/notes", function(req, res){
            res.json(notes);
        });

    //* POST `/api/notes` - Should receive a new note to save on the request body, 
        // used the 14-FinalStarwarsApp assignment - Line 74
        // add it to the `db.json` file, and then return the new note to the client.
        app.post("/api/notes", function(req, res){
            let newNotes = req.body;
            notes.push(newNotes);
            updateDb();

            return console.log("New note aadded: "+newNotes.title);
        });
    //This means you'll need to find a way to give each note a unique `id` when it's saved. In order to
    //Should RECIEVE a query PARAMETER containing the ID  
        app.get("/api/notes/:id", function(req, res){
            res.json(notes[req.params.id]);
        });

    //* DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 
    //delete a note, you'll need to read all notes from the `db.json` file, remove the note with 
    //the given `id` property, and then rewrite the notes to the `db.json` file.
        app.delete("/api/notes/:id", function(req, res){
         //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice   
         notes.splice(req.params.id, 1);
         updateDb();
         console.log("Note deleted with Id" +req.params.id);
        });

        function updateDb(){
            fs.writefile("db/db.json",json.stringify(notes, "/t"),err => {
                if (err) throw err;
                return true;
            });

        }
    });

}
