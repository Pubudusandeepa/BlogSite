const bcrypt = require('bcrypt')
const user = require('../database/models/User')

module.exports = (req,res) =>{
    const {email,password} = req.body

    //try to find the user
    user.findOne({email}, (error,user) =>{
        if(user){


            //compare a password
            bcrypt.compare(password, user.password, (error, same)=>{

           if(same){
               //store user session
             req.session.userId = user._id

               res.redirect('/')
           }else{
               res.redirect('/auth/login')
           }

            })
        }
        else{
            return res.redirect('/auth/login')
        }
    })
   

}