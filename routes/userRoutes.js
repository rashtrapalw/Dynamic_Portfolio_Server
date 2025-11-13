const express=require('express')
const router = express.router()

router.get('/',(req,res)=>{
    res.send('user home page')
})

module.exports=router;