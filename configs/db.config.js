const mongoose = require('mongoose');
const DB_NAME = 'facebook';
const MONGO_URI = `mongodb://localhost/${DB_NAME}`;

mongoose.connect(MONGO_URI,  { useMongoClient: true })
.then(()=>{
    console.log(`connected to database: ${MONGO_URI}`);   
})
.catch(error =>{
    console.log(error);
});