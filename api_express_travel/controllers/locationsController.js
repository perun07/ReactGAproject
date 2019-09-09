const express = require('express');
const router = express.Router();
const Locations = require('../models/locations');

 router.get('/', async (req, res, next) => {
  console.log(req.body, ' this is get all')
     try  {
      const allLocations = await Locations.find();
      console.log(req.session, ' this is req.session')
      res.json({
        code: 200,
        message: "Success", 
        data: allLocations
      });

    } catch (err){

      res.send(err)

    }
});


router.post('/', async (req, res) => {

  try {
    console.log(req.body, ' this is req.body');
    console.log(req.session, ' req.session in post route')
    req.body.user = req.session.userID
    const createdLocations = await Locations.create(req.body);
    
    res.json({
      status: {
        code: 201,
        message: "Success"
      },
      data: createdLocations
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});


router.get('/:id', async (req, res, next) => {


     try  {

        const foundLocations = await Locations.findById(req.params.id);
        res.json({
          status: {
            code: 200,
            message: "Success"
          },
          data: foundLocations
        });

      } catch (err){
        res.send(err);
      }



});

router.put('/:id', async (req, res) => {

  try {
    const updatedLocations = await Locations.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: {
            code: 200,
            message: "resource updated successfully"
          },
      data: updatedLocations
    });
  } catch(err){
    res.send(err)
  }
});


router.delete('/:id', async (req, res) => {

  try {
     const deletedLocations = await Locations.findByIdAndRemove(req.params.id);
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
