import { useState } from 'react';
import { storage } from '../Firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function useImageUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadURLs, setDownloadURLs] = useState([]);

  async function uploadImages(images) {
    const promises = images.map(async (image) => {
      const imageRef = ref(storage,`/taskFiles/${image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on('state_changed', 
        (snapshot) => {
          // Get the progress ratio here
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        }, 
        (error) => {
          console.log("Error uploading image:", error);
        }, 
        () => {
          // Get the download URL of the uploaded image here
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setDownloadURLs((prevURLs) => [...prevURLs, url]);
          });
        }
      );

      return uploadTask;
    });

    try {
      await Promise.all(promises);
      console.log("All images uploaded successfully");
    } catch (error) {
      console.log("Error uploading images:", error);
    }
  }

  return [uploadImages, uploadProgress, downloadURLs];
}

export default useImageUpload;
