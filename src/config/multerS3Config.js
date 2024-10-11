import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "./awsConfig.js";

export const S3uploader = multer({
    storage: multerS3({
        s3: s3,
        bucketName: 'testbucket1103447', //usually stored in dotenv
        acl: 'public-read',
        key: function(req, file, cb) {
            console.log(file);
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); //to make sure key is unique
            cb(null, file.fieldname+ "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]);
        }
    })
});
