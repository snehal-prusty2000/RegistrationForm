const express = require('express') ;
const path  = require('path');//path is inbuilt model in node so we required then show automatic suggestion that is join
const app = express();
require("./db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");//path to static page

app.use(express.static(static_path)) //to tell the express to use ststic page that i created then give path
app.set("view engine", "hbs");


// app.get("/" , (req, res) => {
//     res.send('Hello this is my home page') //home page to show index.html page that present in public 
// })

app.get("/", (req, res) => {
    res.render('index')//index.hbs page that present in views
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})