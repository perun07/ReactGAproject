const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const bcrypt = require('bcryptjs')


router.post("/register", async (req,res)=>{
console.log(req.body, "this is req.body");

    const password = req.body.password
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    console.log(hashedPassword);
    req.body.password = hashedPassword

    try{
        const createdUser = await Users.create(req.body)
            
        //     , (error, createdUser)=>{
        //     res.status(201).json({status:201, message:"createdUser"})
        // })

        
        console.log(createdUser, 'created user');
        req.session.userId = createdUser._id;
        req.session.username = createdUser.username;
        req.session.logged = true;
        res.json({
            status:{
                code: 201,
            },
            data: createdUser
            
        })
    } catch(err){
        res.send(err)
    }
})

router.post('/login', async (req, res) => {
    try{
        const foundUser = await User.findOne({username:req.body.username})
        // console.log(foundUser, "we found you, user");
        if(foundUser){
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.userId = foundUser._id
                req.session.username = foundUser.username
                req.session.logged = true
            }
            res.redirect('/locations')
        }

} catch(err){
    res.send(err);
  }
});


router.get('/logout', (req,res) => {
    req.session.destroy(function(err){
      if(err){
        console.log(err);
        
      } else {
        res.redirect('/')
      }
    })
  })

module.exports = router;
 