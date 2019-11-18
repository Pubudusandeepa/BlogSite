const path = require('path');

const express = require('express');

const {config,engine} = require('express-edge');


const app = new express();

app.use(express.static('public'));

app.use(engine);

app.set('views', `${__dirname}/views`);





app.get('/', (req,res) => {

    res.render('index');
})




app.use('/about', (req,res)=>{
    res.render('about');
})

app.use('/post', (req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/post.html'));
})

app.use('/contact',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/contact.html'));
})
app.listen(3000, ()=>{

    console.log('App listening on port 4000');
})


