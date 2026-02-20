import mysql from "mysql";
var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"creativetest"
});
db.connect((err)=>{
    if(err){
        console.log("Error in connecting to database",err); 
    }else{
        console.log("Database connected successfully");
    }
});
export default db;