
import cloudinary from "../config/cloudinaryConfig.js";
import { DeletePost } from "../services/postService.js";

export async function deletePost(req, res) {
    console.log(req.file);
    
    const delPost = await DeletePost({
        id:req.body._id
    })

    

    return res.json({
        success: true,
        msg:"deleted post successfully"
    })
}