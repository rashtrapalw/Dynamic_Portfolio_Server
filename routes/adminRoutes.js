const express= require('express')
const router= express.Router()  
//admin home route
router.get('/',(req,res)=>{
    res.send('admin home page')

})  

// create admin
// Rest API 


module.exports=router;