const express = require("express");
const cors = require("cors");
 
const userService = require("./data/userService.js");
const app = express();
app.use(express.json());
 
app.use(cors());


const HTTP_PORT = process.env.PORT || 5000;




//post request to handle request to register the new user
app.post('/signUp', (req, res) => {
 
    userService.registerUser(req.body).then((msg)=>
    {
        res.send("Success");
    })
        .catch((err)=>
        {
           res.send(err);
          });
});
 

//post request to handle the request to sign in the user
app.post("/signIn",(req,res) =>
{

    console.log(req.body);
    //check the user credentials
    userService.checkUser(req.body).then((msg)=>
    {
        
        res.send("Success");
    }).catch((err)=>
    {
        console.log(err);
        res.send(err);
    })
})

app.use('/', (req, res) => {
    // Redirect to the React server running at http://localhost:3000
    res.send("Hi this is from backend");
});
 
userService.connect().then(() => {
    app.listen(HTTP_PORT, () => { console.log("API listening on: " + HTTP_PORT) });
})
    .catch((err) => {
        console.log("unable to start the server: " + err);
        process.exit();
    });