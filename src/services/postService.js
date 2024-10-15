import { countAllPosts, createPost, deletePost, findAllPosts } from "../repositiories/postRepository.js";

export const CreatePost = async (createPostObject) => {
    // 1. Take the image of the post and upload on aws

    // 2. Get the url of the image from the aws response

    // 3. Create the post with the caption and the image url in the db using repository layer

    // 4. Return the post object

    const caption = createPostObject.caption?.trim();
    const image = createPostObject.image;

    const post = await createPost(caption, image);
    return post;

}

// export const DeletePostService = async (deletePostObject) => {
//     const id = deletePostObject.id;

//     const postDel = await deletePost(id);
//     return postDel;
// }

export const getAllPostService = async (offset,limit) => {
    const posts = await findAllPosts(offset, limit);

    //calculate total number of post and total number of pages
    const totalDocuments = countAllPosts();
    const totalPages = Math.ceil(totalDocuments / limit);

    return {
        posts, totalPages, totalDocuments
    };
}