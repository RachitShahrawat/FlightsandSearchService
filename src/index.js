const express=require("express");
const bodyParser=require("body-parser");
const { PORT } = require('./config/serverconfig');

const ApiRoutes=require('./routes/index');

 const db=require('./models/index');
// const sequelize=require('sequelize');
// const {City,Airport}= require("./models/index"); 

// const {Airplane}=require('./models/index.js');


const setupAndStartServer=async()=>{
    // create the express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api',ApiRoutes); // when we come to /api, we map ourself to ApiRoutes
    
    app.listen(PORT,async()=>{
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }

        // await Airplane.create({
        //     modelNumber:'Bombardie CRJ'
        // });
     
    });
}

setupAndStartServer();