import express from "express";
import connectDB from "./config/dbConfig.js";
import { createPost } from "./controllers/postController.js";

const PORT = 3000;

const app = express(); 

app.use(express.json()); //middleware to parse json data(serializer, deserializer)

app.use(express.text());  //deserialization of text, json, urlencoded

app.use(express.urlencoded());


app.get('/', (req,res) => {
    return res.send('Home');
});

app.get('/ping', (req, res) => {
    // const name = req.params.name; //req params -> { name:'value', id:2 }
    console.log(req.query);
    console.log(req.body);
    return res.json({"message": "pong"});
});

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

app.post('/posts', createPost);

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});