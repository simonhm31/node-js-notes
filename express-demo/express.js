const express = require("express");
const app = express();

// console.log(express);
// The express node module comes with built in methods 
    // app.get();
    // app.post();
    // app.put();
    // app.delete();

// These 4 express methods correlate with types of HTTP requests


// defining API endpoints with app.get() method
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/message", (req, res) => {
    res.send("[234]");
})

app.get("/api/courses", (req, res) => {
    res.send([420, 1, 2, 3, 4, 5])
})

app.listen(3000, () => console.log("Listening on port 3000..."));