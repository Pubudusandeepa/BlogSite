const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost:27017/node-js-test-blog', {useNewUrlParser: true})


Post.create({
    title: 'My first blog post',
    description: 'Blog post description',
    content: 'Lorem ipsum content'
},(error,post) =>{
    console.log(error,post)
})