const {FlightRespository,AirplaneRespository}=require('../repository/index');


class FlightService {
    constructor(){
        this.airplaneRespository = new AirplaneRespository();
        this.flightrespository=new FlightRespository();
    }
    async createFlight(data){
        try{
            const airplane=await this.airplaneRespository.getAirplane(data.airplanId);
             const flight=await this.flightrespository.createFlight({...data,totalSeats:airplane.capacity
             });
             return flight;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    // async getFlightData(){
    // // todo
    // }
}
    module.exports=FlightService;
