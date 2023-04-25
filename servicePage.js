// const express = require('express')
// const router = express.Router()
// const listOfService = [
//     { id: 1, Service: "Web Development", description: "Build high-quality web applications using modern technologies" },
//     { id: 2, Service: "Mobile App Development", description: "Develop mobile applications for iOS and Android platforms" },
//     { id: 3, Service: "Backend Development", description: "Design and implement scalable and secure backend systems" },
//     { id: 4, Service: "Frontend Development", description: "Create dynamic and responsive user interfaces using popular frameworks" },
//     { id: 5, Service: "Data Engineering", description: "Extract, transform, and load large datasets to support business operations" },
//     { id: 6, Service: "AI Development", description: "Build intelligent systems using machine learning and other AI techniques" },
//     { id: 7, Service: "Research and Development", description: "Explore emerging technologies and innovate new solutions" },
//     { id: 8, Service: "Cloud Architecture", description: "Design and deploy scalable and reliable cloud infrastructure" }
//   ];
// router.get('/',(request,response)=>{
//     response.send("This is service page")

// })
// // router.get('/:id',(request,response) =>{
// //   if (request.params.id == '1')
// //     {
// //         response.send("mobileapp development")
// //     }
// //     else if (request.params.id == '2')
// //     {
// //         response.send("app development")
// //     }  
// //     else if (request.params.id == '3')
// //     {
// //         response.send("product development")
// //     }  
// //     else if (request.params.id == '4')
// //     {
// //         response.send("web development")
// //     }  
// //     else if (request.params.id == '5')
// //     {
// //         response.send("machine development")
// //     }  
// //     else if (request.params.id == '6')
// //     {
// //         response.send("full stack development")
// //     }  
// // }) 



// router.get('/:id',(request,respond) => {
//     const serviceId = Number(request.params.id)
//     const getService = listOfService.find((service) => service.id === serviceId)
//     if (!getService)
//         {
//             response.status(500).send("Expected service not found")
//             console.log(request.params.id);

//         }
//         else{
//             response.json(getService)
//         }
// })

// module.exports = router
const express = require('express')
const router = express.Router();

const listOfService = [
    { id: 1, Service: "Web Development", description: "Build high-quality web applications using modern technologies" },
    { id: 2, Service: "Mobile App Development", description: "Develop mobile applications for iOS and Android platforms" },
    { id: 3, Service: "Backend Development", description: "Design and implement scalable and secure backend systems" },
    { id: 4, Service: "Frontend Development", description: "Create dynamic and responsive user interfaces using popular frameworks" },
    { id: 5, Service: "Data Engineering", description: "Extract, transform, and load large datasets to support business operations" },
    { id: 6, Service: "AI Development", description: "Build intelligent systems using machine learning and other AI techniques" },
    { id: 7, Service: "Research and Development", description: "Explore emerging technologies and innovate new solutions" },
    { id: 8, Service: "Cloud Architecture", description: "Design and deploy scalable and reliable cloud infrastructure" }
  ];

router.get('/',(request,response)=>{
    response.send("This is Service Page...")
})



router.get('/:id',(request,response)=>{
    const serviceId = Number(request.params.id)
    const getService = listOfService.find((service)=>service.id=== serviceId)
    if(!getService)
    {
        response.status(500).send("Expected Service Not Found...")
        console.log(request.params.id)
    }
    else
    {
        response.json(getService)
    }
})

module.exports=router