const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost:27017/node-js-test-blog', {useNewUrlParser: true})


// Post.find({
 
// }, (error,post)=>{
//   console.log(error,post)  
// })

// Post.findById("5dd6010a19835e11e8c99619", (error,post)=>{
//   console.log(error,post);
// })

// Post.findByIdAndUpdate("5dd6010a19835e11e8c99619",{
// title: 'My first blog post title is loren ipsum'
// },(error,post)=>{
//   console.log(error,post)
// })

// Post.create({
//     title: 'Third My first blog post',
//     description: 'Third Blog post description',
//     content: 'Third Lorem ipsum content'
// },(error,post) =>{
//     console.log(error,post)
// })