const {ClientErrorsCodes}=require('../utils/error-code');


const validateCreateFlight=(req,res,next)=>{
    if(!req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivaltime ||
        !req.body.departuretime || !req.body.price
    ){
        return res.status(ClientErrorsCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:'Invalid request body for create flight',
            err:'Missing mandatory properties to create a flight'
        });
    }
    next();
}


module.exports={
    validateCreateFlight
};