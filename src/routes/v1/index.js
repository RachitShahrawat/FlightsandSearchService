const express=require('express');

const CityController= require('../../controllers/city-controller');

const router=express.Router();

router.post('/city',CityController.create); // whenever someone will call /v1/city we will call city controller function

module.exports=router;