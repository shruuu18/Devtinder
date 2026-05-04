const express = require("express"); // Ye module server banane me help karta hai
const app = express(); // express server is working here 

// all this are request handlers jo client k request ko browser m run krte h

app.use("/",(req,res) => {
    res.send("Hello from the first server ");
});

app.use("/hello",(req,res) => {
    res.send("Hello everyone");
});

app.use("/test",(req,res) => {
    res.send("Hello from server");
});

// server is listening to console the value at port no 7777
app.listen(7777,() => {
    console.log ("server is listening successfully on port 7777")
});