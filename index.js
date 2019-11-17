const path =require('path');

const express = require('express');




const app = new express();

app.use(express.static('public'));

app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'));
})

app.use('/about', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/about.html'));
})

app.use('/post', (req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/post.html'));
})

app.use('/contact',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/contact.html'));
})
app.listen(4000, ()=>{

    console.log('App listening on port 4000');
})