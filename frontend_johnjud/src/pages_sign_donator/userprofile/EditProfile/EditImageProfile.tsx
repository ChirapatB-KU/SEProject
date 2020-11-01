import React, { useState } from "react";
import profileservice from '../ProfileService';

const EditImageProfile =() =>{
  const [image, setImage] = useState<any>();

  const handleUpload=() =>{
    const file = image
    console.log(image)

    const profile_pic = {source: file}

    console.log(profile_pic)
    profileservice.updateProfile(profile_pic,localStorage.Token,localStorage.UserId)
  }


  return (
    <div>
      <input
        type="file"
        id="upload-button"
        onChange={(e) => {setImage(e.target.value);}}
      />
      
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default EditImageProfile;