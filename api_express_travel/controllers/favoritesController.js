const express = require('express');
const router = express.Router();
const Favorites = require('../models/favorites');


 router.get('/', async (req, res, next) => {
  console.log(req.body, ' this is get all')
     try  {
      const allFavorites = await Favorites.find();
      console.log(req.session, ' this is req.session')
      res.json({
        code: 200,
        message: "Success", 
        data: allFavorites
      });

    } catch (err){

      res.send(err)

    }
});


router.post('/', async (req, res) => {

  try {
    console.log(req.body, ' this is req.body');
    console.log(req.session, ' req.session in post route')
    const createdFavorites = await Favorites.create(req.body);
    
    res.json({
      status: {
        code: 201,
        message: "Success"
      },
      data: createdFavorites
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});





router.get('/:id', async (req, res, next) => {


     try  {

        const foundFavorites = await Favorites.findById(req.params.id);
        res.json({
          status: {
            code: 200,
            message: "Success"
          },
          data: foundFavorites
        });

      } catch (err){
        res.send(err);
      }



});

router.put('/:id', async (req, res) => {

  try {
    const updatedFavorites = await Favorites.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: {
            code: 200,
            message: "resource updated successfully"
          },
      data: updatedFavorites
    });
  } catch(err){
    res.send(err)
  }
});

router.delete('/:id', async (req, res) => {

  try {
     const deletedFavorites = await Favorites.findByIdAndRemove(req.params.id);
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
