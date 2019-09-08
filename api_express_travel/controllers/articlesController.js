const express = require('express');
const router = express.Router();
const Articles = require('../models/article');


 router.get('/', async (req, res, next) => {
  console.log(req.body, ' this is get all')
     try  {
      const allArticles = await Articles.find();
      console.log(req.session, ' this is req.session')
      res.json({
        code: 200,
        message: "Success", 
        data: allArticles
      });

    } catch (err){

      res.send(err)

    }
});


router.post('/', async (req, res) => {

  try {
    console.log(req.body, ' this is req.body');
    console.log(req.session, ' req.session in post route')
    const createdArticles = await Articles.create(req.body);
    
    res.json({
      status: {
        code: 201,
        message: "Success"
      },
      data: createdArticles
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});





router.get('/:id', async (req, res, next) => {


     try  {

        const foundArticles = await Artciles.findById(req.params.id);
        res.json({
          status: {
            code: 200,
            message: "Success"
          },
          data: foundArticles
        });

      } catch (err){
        res.send(err);
      }



});

router.put('/:id', async (req, res) => {

  try {
    const updatedArticles = await Articles.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: {
            code: 200,
            message: "resource updated successfully"
          },
      data: updatedArticles
    });
  } catch(err){
    res.send(err)
  }
});

router.delete('/:id', async (req, res) => {

  try {
     const deletedArticles = await Articles.findByIdAndRemove(req.params.id);
      res.json({
        status: {
            code: 200,
            message: "resource deleted successfully"
          }
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
