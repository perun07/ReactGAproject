const mongoose = require('mongoose');
const ArticlesSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: String,
}, {timestamps: true});

ArticlesSchema.methods.toJson = function (){
    return {
        _id: this._id,
        title: this.title, 
        body: this.body, 
        author: this.author, 
        timeCreated: this.timeCreated,
        timeUpdated: this.timeUpdated,
    }
}

// router.get('/', (req,res)=>{
//   if(req.session.logged){
//     ArticlesSchema.find({}, (err, foundArticles)=>{
//       res.render('/', {
//         //redirect to the articcles homepage
//         articles: foundArticles
//       })
//     })
//   } else{
//     res.redirect('/sessions/login')
//   }
// })

module.exports = mongoose.model('Articles', ArticlesSchema);
