const mongoose = require ('mongoose')
const connection= (async()=>{

    try{
        await mongoose.connect (""+process.env.CONNECTION_STRING)
        console.log("DB connected Succesfully"+mongoose.connection.readyState)
    }catch(error){
        console.log(error)
         console.log("DB Connection Faild....." + mongoose.connection.readyState)
    }
})
connection()
    module.exports = connection
