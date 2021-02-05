const express = require('express');
const ejs = require('ejs');
const mongoose = require("mongoose");
const port = 3000;
const bodyParser = require('body-parser');
const profile = require('./models/users');
const app = express();

mongoose.connect("mongodb://localhost:27017/userDB", {
    useNewUrlParser:true, 
    useUnifiedTopology:true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => {
    console.log("connected to mongodb cloud! :)");
})
.catch((err) => {
    console.log(err);
});


app.use(express.static("public"));
app.set('view engine', "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res ) => {
    res.render('index');
})
app.get('/signup', (req, res ) => {
    res.render('signup');
})
app.get('/login', (req, res ) => {
    res.render('login');
})
app.get('/dash', (req, res ) => {
    res.render('dashboard');
})

app.post('/register', (req, res) =>{
    const user = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const newProfile = new User({
        user:user,
        email:email,
        password:password
    });
    newProfile.save((err) => {
        err?console.log(err):res.send('Sucessfully Created Profile');
    })
    
});

app.get('/login', (req, res) =>{
   
})






app.listen(port, () =>{
    console.log('Example app listening at');
})

