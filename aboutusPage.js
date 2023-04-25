const express = require ('express')
const router = express.Router()

router.get('/',(request,response) =>{
    response.send("This is aboutus page")
})


module.exports = router
