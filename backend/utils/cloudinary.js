import {v2 as cloudinary } from "cloudinary"
import dotenv from 'dotenv'

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// uploading
export const uploadImage = (fileBuffer, publicId) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        public_id: publicId,
        folder: "users",
        overwrite: true,
        quality: "auto",
        fetch_format: "auto",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );

    stream.end(fileBuffer);
  });
};

// deleting

export const deleteImage = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(`users/${publicId}`);
    return result;
  } catch (err) {
    throw err;
  }
};
