const path = require('path');

const express = require('express');

const mongoose = require('mongoose');

const {config,engine} = require('express-edge');

const bodyParser = require('body-parser')

const fileUpload = require('express-fileupload')

const Post = require('./database/models/Post')

const createPostController = require('./controllers/CreatePost')

const homePageController = require('./controllers/homePage')

const storePostController = require('./controllers/storePost')

const getPostController = require('./controllers/getPost')

const app = new express();

mongoose.connect('mongodb://localhost:27017/node-js-blog',{ useNewUrlParser: true });

app.use(fileUpload())

app.use(express.static('public'));

app.use(engine);

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

const validateCreatePostMiddleware = (req, res, next) =>{
    
    console.log('I Have Been Called')
    if(!req.files || !req.body.title || !req.body.subtitle || !req.body.content)
    {
        return res.redirect('/posts/new')
    }

    next()
}

 app.use("/posts/store",validateCreatePostMiddleware)

app.get("/", homePageController)

app.get("/posts/new", createPostController);

app.post("/posts/store", storePostController);



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


