const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();
async function connectMongoDb(){
 mongoose.connect(process.env.URL).then(() => console.log("Db connection successful")).catch((err)=>{
    console.log(err);
});
}

module.exports = {
    connectMongoDb,
};