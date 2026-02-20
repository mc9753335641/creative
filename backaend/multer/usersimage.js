import multer from "multer";
const storage=multer.diskStorage({
    destination:function(req,file,cb){  

        cb(null,"./uploads");
    },
    filename:function(req,file,cb){ 

        cb(null,Date.now()+"-"+file.originalname);
    }   
});

const userupload=multer({storage:storage,limits:{fileSize:5*1024*1024}});
// export const uploadSingle=userupload.single("file");
export default userupload;
