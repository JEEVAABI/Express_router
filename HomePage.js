const express = require('express')
const home = express()
const aboutusPage = require('./aboutusPage.js')
const contactusPage = require('./contactusPage.js')
const productPage = require('./productPage.js')
const loginPage = require('./loginPage.js')
const servicePage = require('./servicePage.js')




home.get('/',(request,response) =>{
    
    response.send("Get Router on Home Page")

})
home.use('/aboutusPage', aboutusPage)
home.use('/contactusPage', contactusPage)
home.use('/productPage',productPage)
home.use('/loginPage',loginPage)
home.use('/servicePage',servicePage)



home.listen(3000)