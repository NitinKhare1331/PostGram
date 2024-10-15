import { createPost, deletePost, findAllPost } from "../repositiories/postRepository.js";

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

export const DeletePost = async (deletePostObject) => {
    const id = deletePostObject.id;

    const postDel = await deletePost(id);
    return postDel;
}

export const FindAll = async () => {
    const allPost = await findAllPost();
    return allPost;
}