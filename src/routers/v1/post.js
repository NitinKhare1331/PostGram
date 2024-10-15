//Here all the post related routes are present
// We look at the remaining url part after /posts

import express from 'express';
import upload from '../../config/multerCloudinaryConfig.js';
import createPost from '../../controllers/createPostController.js';

const router = express.Router(); //Router object to modularize the route

export const postRouter = router.post('/', upload.single('image'), createPost);

// export default router;

