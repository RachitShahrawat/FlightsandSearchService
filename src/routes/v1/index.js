const express=require('express');
const {FlightMiddlewares}=require('../../middlewares/index');

const CityController= require('../../controllers/city-controller');
const FlightController=require('../../controllers/flight-controller');
const AirportController= require('../../controllers/airport-controller');

const router=express.Router();

router.post('/city',CityController.create); // whenever someone will call /v1/city we will call city controller function

router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);
router.post('/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create);
router.get('/flights',FlightController.getAll);
router.get('/flights/:id',FlightController.get);

router.post('/airports', AirportController.create);

router.patch('/flights/:id',FlightController.update);

module.exports=router;