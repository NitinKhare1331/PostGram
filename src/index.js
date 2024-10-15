import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from './routers/apiRouter.js'
// import { postRouter } from "./routers/post.js";
// import { userRouter } from "./routers/user.js";
// import { S3uploader } from "./config/multerS3Config.js";
// import router from './controllers/createPostController.js'
// import { deletePost } from "./controllers/deletePostController.js";

const PORT = 3000;

const app = express(); 

app.use(express.json()); //middleware to parse json data(serializer, deserializer)

app.use(express.text());  //deserialization of text, json, urlencoded

app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter); //If the url starts with /api, then the request is forwarded to the apiRouter

// app.use('/posts', postRouter); //If the url starts with /posts, then use the postRouter to handle the request

// app.use('/api/v1/users', userRouter); //If the url starts with /users, then use the user router to handle the request

// app.get('/', (req,res) => {
//     return res.send('Home');
// });

// app.get('/ping', (req, res) => {
//     // const name = req.params.name; //req params -> { name:'value', id:2 }
//     console.log(req.query);
//     console.log(req.body);
//     return res.json({"message": "pong"});
// });

// function m1(req, res, next){
//     console.log('M1');
//     next();
// }

// function m2(req, res, next){
//     console.log('M2');
//     next();
// }

// function m3(req, res, next){
//     console.log('M3');
//     next();
// }



// app.delete('/deletepost', deletePost)

// app.post('/posts', S3uploader.single('image'), createPost);

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});