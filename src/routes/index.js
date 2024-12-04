const express=require('express');
const router= express.Router();

const v1ApiRoutes= require('./v1/index');

router.use('/v1',v1ApiRoutes);// whenever we get /v1 as prefix,map it to v1ApiRoutes

module.exports= router;