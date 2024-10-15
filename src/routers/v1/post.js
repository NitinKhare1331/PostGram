//Here all the post related routes are present
// We look at the remaining url part after /posts

import express from 'express';
import upload from '../../config/multerCloudinaryConfig.js';
import { getAllPosts, createPost } from '../../controllers/PostController.js';

const router = express.Router(); //Router object to modularize the route

router.post('/', upload.single('image'), createPost);

router.get('/', getAllPosts);

export default router;

