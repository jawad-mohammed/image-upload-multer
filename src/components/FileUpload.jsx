import {useState} from 'react'
import axios from 'axios'
const FileUpload = () => {
  const [fileUpload,setFileUpload] = useState('')
  
  const handleChange=(e)=>{
    setFileUpload(e.target.files[0])
  }
  

  const handleSubmit=async (e)=>{
e.preventDefault()
console.log(fileUpload);
// await fetch(`http://localhost:8081/upload`,{
//   method:'post'
//})

}

  return (
    <>
  <form onSubmit={handleSubmit}>
    <input type="file" name='fileUpload'  onChange={handleChange} />
  <button type='submit'>submit</button>
    </form>    


    </>
  )
}

export default FileUpload
