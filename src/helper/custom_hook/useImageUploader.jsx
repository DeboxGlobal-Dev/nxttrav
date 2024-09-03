import { useState } from "react";

const useImageUploader = () =>{
    const [imageData, setImageData] = useState({});

    const handleImage = (e, fieldName) =>{
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () =>{
            const base64String = reader.result;
            setImageData((prevImage)=>(
                {
                    ...prevImage,[fieldName]:base64String 
                }
            ))
        }

        reader.onerror = (error) =>{
            console.log('Something went wrong', error);
        }
    }

    return {imageData, handleImage}

}

export default useImageUploader;