import multer from "multer";

const storage = multer.diskStorage({
    filename: function (req, file, cb){
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

export default upload;

// error first callback
// null means no error at all