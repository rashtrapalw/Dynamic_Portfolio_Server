// const mongoose = require ('mongoose')
// const connection= (async()=>{

//     try{
//         await mongoose.connect (""+process.env.CONNECTION_STRING)
//         console.log("DB connected Succesfully"+mongoose.connection.readyState)
//     }catch(error){
//         console.log(error)
//          console.log("DB Connection Faild....." + mongoose.connection.readyState)
//     }
// })
// connection()
//     module.exports = connection


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("✅ DB connected successfully");
  } catch (error) {
    console.error("❌ DB connection failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
