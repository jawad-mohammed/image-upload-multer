const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const fs = require('fs')
const { dirname } = require('path')
const fsPromises = require('fs').promises
//middlewares 
app.use(express.json())
app.use(cors())
//ejs 
app.set('view engine','ejs')
app.get('/',async(req,res,next)=>{
res.render('index')
})

//connecting to different routes 
app.use('/',require('./controller/routes'))
//app.use('/',require('./controller/uploadRoutes'))




app.get('/',async(req,res)=>{
const data = await fsPromises.readFile(path.join(__dirname,'public','jawad.png','pic2.png','pic5.png','pic6.png'))
//res.send(data)
res.sendFile(data)
    })



 



const PORT = 8081











app.listen(PORT,console.log(`server is listening on http://localhost:${PORT}`))

