import Post from "../schema/posts";

export const createPost = async (caption, image, user) => {
    try {
        // const newPost = new Post({ caption, image, user });
        // await newPost.save();
        const newPost = await Post.create({ caption, image, user });
        console.log(newPost);
        
    }
    catch(error) {
        console.log(error);
    }
}

export const findAllPost = async () => {
    try{
        const posts = await Post.find();
        return posts;
    }
    catch(error) {
        console.log(error);
    }
}

export const findPostById = async (id) => {
    try {
        const post = await Post.findById(id);
        return post;
    }
    catch(error) {
        console.log(error);
    }
}

export const deletePost = async (id) => {
    try {
        const post = await Post.findByIdAndDelete(id);
        return post;
    }
    catch(error) {
        console.log(error);
    }
}