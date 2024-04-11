import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dszl2jihx', 
  api_key: '345399325239313', 
  api_secret: 'NtA5uJ_7veXQpRgugdwUIxkpgaI' 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })

        return response
    } catch (error) {
        return {message: error}
    }
}

export {uploadOnCloudinary}