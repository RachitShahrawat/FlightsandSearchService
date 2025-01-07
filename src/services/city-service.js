const { CityRepository }= require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository= new CityRepository(); // "Whenever someone uses CityService, they'll also get access to CityRepository so it can do the database work."
    }

    async createCity(data){
        try{
         const city=await this.cityRepository.createCity(data); // It calls the createCity method from the Repository Layer (this.cityRepository.createCity(data)), which performs the actual database interaction.
// The data argument is passed to the repository's createCity method, and the city is returned from there.
         return city;
        } catch(error){
         console.log("Something went wrong at service layer");
         throw{error};
        }
    }

    async deleteCity(cityId){ 
        try{
      const response= await this.cityRepository.deleteCity(cityId);
      return response;
    } catch(error){
     console.log("Something went wrong at service layer");
     throw{error};
    }}

    async updateCity(cityId,data){
        try{
            const city=await this.cityRepository.updateCity(cityID,data);
            return city;
        } catch(error){
         console.log("Something went wrong at service layer");
         throw{error};
        }
    }

    async getCity(cityId){
        try{
            const city=await this.cityRepository.getCity(cityId);
            return city;
        } catch(error){
         console.log("Something went wrong at service layer");
         throw{error};
        }
    }

    async getAllCities(){
        try{
        const cities= await this.cityRepository.getAllCities();
        return cities;
        }
        catch(error){
            console.log("Something went wrong at service layer");
            throw{error};
        }
    }
}

module.exports = CityService;