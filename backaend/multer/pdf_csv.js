import multer from "multer";
const storage=multer.diskStorage({
    destination:function(req,file,cb){  

        cb(null,"./uploads");
    },
    filename:function(req,file,cb){ 

        cb(null,Date.now()+"-"+file.originalname);
    }   
});
const fileFilter=(req,file,cb)=>{
    if(file.mimetype==="application/pdf" || file.mimetype==="text/csv"){
        cb(null,true);
    }else{
        cb(new Error("Only PDF and CSV files are allowed"),false);
    }  
} 
const upload=multer({storage:storage,fileFilter:fileFilter});
export default upload;
