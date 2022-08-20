
import axios from "axios";
import { useState, useEffect } from "react";

function ImageList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <div className="ImageList">
      <h1>Image uploading react</h1>
    
    </div>
  );
}

export default ImageList;