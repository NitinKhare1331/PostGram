import dotenv from "dotenv";

dotenv.config();

export const DB_URL = process.env.MONGO_DB_URL;

export const CLOUDINARY_CLOUD_NAME = process.env.CLOUD_NAME;

export const CLOUDINARY_API_KEY = process.env.API_KEY;

export const CLOUDINARY_SECRET_KEY = process.env.SECRET_KEY;