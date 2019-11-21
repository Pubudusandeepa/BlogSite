const path = require('path');

const express = require('express');

const mongoose = require('mongoose');

const {config,engine} = require('express-edge');


const app = new express();

mongoose.connect('mongodb://localhost::27017/node-js-blog',{ useNewUrlParser: true });

app.use(express.static('public'));

app.use(engine);

app.set('views', `${__dirname}/views`);





app.get('/', (req,res) => {

    res.render('index');
})

app.get('/posts/new', (req,res) =>{
    res.render('create');
})



app.get('/about', (req,res)=>{
    res.render('about');
})

app.get('/post', (req,res) =>{
    res.render('post');
})

app.get('/contact',(req,res) =>{
    res.render('contact');
})

app.listen(3000, ()=>{

    console.log('App listening on port 3000');
})


