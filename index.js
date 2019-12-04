const path = require('path');

const express = require('express');

const mongoose = require('mongoose');

const {config,engine} = require('express-edge');

const bodyParser = require('body-parser')

const fileUpload = require('express-fileupload')

const expressSession = require('express-session')

const connectMongo = require('connect-mongo')

const Post = require('./database/models/Post')

const createPostController = require('./controllers/CreatePost')

const homePageController = require('./controllers/homePage')

const storePostController = require('./controllers/storePost')

const getPostController = require('./controllers/getPost')

const createUserController =require('./controllers/createUser')

const storeUserController = require('./controllers/storeUser')

const loginController = require('./controllers/login')

const loginUsercontroller = require('./controllers/loginUser')

const app = new express();

mongoose.connect("mongodb://localhost/node-js-blog");

const mongoStore = connectMongo(expressSession);

app.use(expressSession({

    secret: 'secret',

    store: new mongoStore({

        mongooseConnection: mongoose.connection
    })

}))

mongoose.connect('mongodb://localhost:27017/node-js-blog',{ useNewUrlParser: true });

app.use(fileUpload())

app.use(express.static('public'));

app.use(engine);

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

const storePost  = require('./middleware/storePost')

const auth = require("./middleware/auth");

 app.use('/posts/store', storePost)

 app.use("posts/new", auth);

app.get("/", homePageController)

app.get("/posts/new", auth , createPostController);

app.post("/posts/store", auth , storePost, storePostController);

app.get("/auth/login", loginController )

app.post("/users/login", loginUsercontroller)

app.get("/auth/register", createUserController);

app.post("/users/register", storeUserController)




app.get('/about', (req,res)=>{
    res.render('about');
})

app.get('/post/:id', getPostController)

app.get('/contact',(req,res) =>{
   
    res.render('contact');
})

app.listen(3000, ()=>{

    console.log('App listening on port 3000');
})


