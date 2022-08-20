const express = require('express')
const router = express.Router()
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const fsPromises = require('fs').promises
//middlewares
router.use(cors())
router.use(express.json())
router.use(express.static('public'))



//multer logic
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public')
    },
    filename:(req, file,cb)=>{
        console.log(file);
        cb(null,Date.now()+ path.extname(file.originalname) )
    }
})



let upload = multer({storage:storage })

// const uploadFiles = upload.array("public",10)
// const uploadImages = (req,res,next)=>{
// uploadFiles(req,res,err =>{
//     if(err instanceof multer.MulterError){
//         console.log(err);
//     }if(err.code === 'LIMIT_UNEXPECTED_FILE'){
//         console.log(err);
//     }
//     next()
// })
// }
// //resizing image
// const sharp = require('sharp')
// const resizeImage = async(req,res,next)=>{
// req.body.public = []
// await Promise.all(
//     req.files.map(async (file)=>{
//   const newFilename = '';
//   await sharp(file.buffer)
//   .resize(640,320)
//   .toFormat("jpeg")
//  .jpeg({quality:90})
//  .toFile(`upload/${newFilename}`)
//  req.body.public.push(newFilename)

//     })
//    )
// next()
// }














router.post('/upload',upload.single('fileUpload'),async(req,res)=>{
    // const tempPath = req.file.path;
    //    console.log(tempPath);
      res.send('image uploaded')
     


    res.send({"msg":"multer demo"})
})




//testing with sharp 

// const tempPath = req.file.path;
//     const targetPath = path.join(__dirname, "./uploads/image.png");

//     if (path.extname(req.file.originalname).toLowerCase() === ".png") {
//       fs.rename(tempPath, targetPath, err => {
//         if (err) return handleError(err, res);

//         res
//           .status(200)
//           .contentType("text/plain")
//           .end("File uploaded!");
//       });
//     } else {
//       fs.unlink(tempPath, err => {
//         if (err) return handleError(err, res);

//         res
//           .status(403)
//           .contentType("text/plain")
//           .end("Only .png files are allowed!");
//       });
//     }




















module.exports = router
