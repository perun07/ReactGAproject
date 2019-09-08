const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const bcrypt = require ('bcryptjs')


router.get("/new", (req,res)=>{
    res.render('/')
})

router.get("/login", (req,res)=>{
    res.render('/')
})

router.get('/logout', (req,res) => {
    req.session.destroy(function(err){
      if(err){
        console.log(err);
        
      } else {
        res.redirect('/')
      }
    })
  })

router.post("/register", async (req,res)=>{
    try{
        const salt = bcrypt.genSaltSync(10)
        req.body.password = bcrypt.hashSync(req.body.password, salt)
        const newUser = await User.create(req.body)
        req.session.userID = newUser._id
        res.redirect("/articles")
    } catch(err){
        res.send(err)
    }
})

router.post('/login', async (req, res) => {
    console.log(req.body);
    try{
        const userFromDb = await User.findOne({username:req.body.username})
        console.log(req.body.password);
        console.log(userFromDb.password);
        const passwordValid = bcrypt.compareSync(req.body.password, userFromDb.password)
        if(passwordValid){
            req.session.userID = userFromDb._id
            res.redirect('articles')
        } else{
            res.send('Bad Login')
        }

} catch(err){
    res.send(err);
  }
});



module.exports = router;
 