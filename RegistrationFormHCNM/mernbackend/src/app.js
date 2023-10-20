const express = require('express') ;
const path  = require('path');//path is inbuilt model in node so we required then show automatic suggestion that is join
const app = express();
const hbs =require("hbs");

require("./db/conn");
const Register = require("./models/registers");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");//path to static page
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());//use postmon it gives database resultbthis time this code required
app.use(express.urlencoded({extended:false})); //form what to write all show not show undefind

app.use(express.static(static_path)) //to tell the express to use ststic page that i created then give path
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

// app.get("/" , (req, res) => {
//     res.send('Hello this is my home page') //home page to show index.html page that present in public 
// })

app.get("/", (req, res) => {
    res.render('index')//index.hbs page that present in views
});

// create a new user in our database
app.post("/register", async(req, res) => {
    try{
        //check passward same or not
        const passward = req.body.passward;
        const cpassward = req.body.confirmPassward;

        if(passward === cpassward){ //=== use for same and datatype Register is table name
             
            const registerEmployee = new Register({
                firstname : req.body.firstname,   //write similarly for all
                lastname : req.body.lastname
            })

            //now save the data in the database
          const registered =  await  registerEmployee.save();
          res.status(201).render('index');  //if error quotes required
        }else{
            res.send("passward not matching");
        }
        
        // console.log(req.body.firstname); //this like all are write for last name ,gender ...
        // res.send(req.body.firstname);
    }catch(error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})