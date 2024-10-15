import cloudinary from "../config/cloudinaryConfig.js"
import { CreatePost } from "../services/postService.js";
import { getAllPostService } from "../services/postService.js";
// export async function createPost(req, res) {
//     //call the service layer
//     return res.json({message: 'Post created successfully'})
// }


// Helper function to wrap cloudinary upload in a promise
function uploadToCloudinary(filePath) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(filePath, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.secure_url || result.url);
            }
        });
    });
}

export async function createPost(req, res) {
    try {
        // Check if the file exists in the request
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'No file uploaded'
            });
        }

        // Log the path where multer stored the file locally
        console.log('File stored at:', req.file.path);

        // Upload the file to Cloudinary and wait for the upload to finish
        const imageUrl = await uploadToCloudinary(req.file.path);
        console.log('Image URL:', imageUrl);

        // Proceed with creating the post after the upload is successful
        const post = await CreatePost({
            caption: req.body.caption,
            image: imageUrl
        });

        // Return success response with the created post
        return res.status(200).json({
            success: true,
            message: 'Post created successfully!',
            data: post
        });
    } catch (error) {
        console.error('Error creating post:', error);
        return res.status(500).json({
            success: false,
            message: 'Error creating post'
        });
    }
}

export async function getAllPosts(req, res) {
    try {        
        const limit = req.query.limit || 10;
        const offset = req.query.offset || 0;
        
        const paginatedPost = await getAllPostService(offset, limit);        

        return res.status(200).json({
            success: true,
            message: 'All post fetched successfully',
            data: paginatedPost
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}








// async function createPost(req, res) {
//     console.log(req.file);
    
//     // Check if the file exists in the request
//     if (!req.file) {
//         return res.status(400).json({
//             success: false,
//             message: 'No file uploaded'
//         });
//     }

//     // Log the path where multer stored the file locally
//     console.log('File stored at:', req.file.path);

//     // Upload the file to Cloudinary using the local path from multer
//     cloudinary.uploader.upload(req.file.path, function (err, result) {
//         if (err) {
//             console.error('Cloudinary upload error:', err);
//             return res.status(500).json({
//                 success: false,
//                 message: 'Error uploading image'
//             });
//         }

//         // Get the URL of the uploaded image from the result
//         const imageUrl = result.secure_url || result.url;
//         console.log(imageUrl);
        
//         // Send back the response with the image URL
//         return res.status(200).json({
//             success: true,
//             message: 'Uploaded successfully!',
//             data: { imageUrl }
//         });
//     });



//     const post = await CreatePost({
//         caption: req.body.caption,
//         image: imageUrl
//     })
// }


// function createPost(req, res) {
//     // Check if the file exists in the request
//     if (!req.file) {
//         return res.status(400).json({
//             success: false,
//             message: 'No file uploaded'
//         });
//     }

//     console.log(req.body);
    

//     // Use the buffer from memory storage for Cloudinary upload
//     cloudinary.uploader.upload_stream((error, result) => {
//         if (error) {
//             console.error('Cloudinary upload error:', error);
//             return res.status(500).json({
//                 success: false,
//                 message: 'Error uploading image'
//             });
//         }

//         // Get the URL of the uploaded image from the result
//         const imageUrl = result.secure_url || result.url;

//         // Send back the response with the image URL
//         return res.status(200).json({
//             success: true,
//             message: 'Uploaded successfully!',
//             data: { imageUrl }
//         });
//     }).end(req.file.buffer);  // End the stream with the file buffer
// }


