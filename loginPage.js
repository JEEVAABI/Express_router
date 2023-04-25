const express = require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.send("This is loginpage")

})
router.get('/:id/:name',(request,response) =>{
    response.send("login id is "+request.params.id+" name is "+request.params.name)
}) 

module.exports = router
