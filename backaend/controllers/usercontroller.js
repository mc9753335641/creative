
import db from "../database/db.js";
import jwt from "jsonwebtoken"
export const addUser = async (req, res) => {
    try {

        const { name, email, password, phone, address } = req.body;
        const image = req.file.filename;
        var sql = "INSERT INTO users(name,email,password,phone,image,address) VALUES(?,?,?,?,?,?)";
        console.log(sql)
        db.query(sql, [name, email, password, phone, image, address], (err, result) => {
            if (err) {
                console.log("Error in adding user", err);
            } else {
                res.status(201).json({ message: "User added successfully" });
            }
        });
    } catch (error) {
        console.log("Error in addUser controller", error);
        res.status(500).json({ message: "Internal server error" });
    }

}
export const getAllUsers = async (req, res) => {
    try {

        var sql = "SELECT * FROM users";
        await db.query(sql, (err, result) => {
            if (err) {
                console.log("Error in fetching users", err);
            } else {
                res.status(200).json({ message: "Users fetched successfully", data: result });
            }
        });
    } catch (error) {
        console.log("Error in getAllUsers controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const getUserById = async (req, res) => {
    try {

        const id = req.params.id;
        var sql = "SELECT * FROM users WHERE id=?";

        await db.query(sql, [id], (err, result) => {
            if (err) {
                console.log("Error in fetching user by id", err);
            } else {
                res.status(200).json({ message: "User fetched successfully", data: result });
            }
        });
    } catch (error) {
        console.log("Error in getUserById controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const updateUser = async (req, res) => {
    try {

        const id = req.params.id;
        const { name, email, password, phone, address } = req.body;
        var sql = "UPDATE users SET name=?,email=?,password=?,phone=?,address=? WHERE id=?";
        await db.query(sql, [name, email, password, phone, address, id], (err, result) => {
            if (err) {
                console.log("Error in updating user", err);
            } else {
                res.status(200).json({ message: "User updated successfully" });
            }
        });
    } catch (error) {
        console.log("Error in updateUser controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const deleteUser = async (req, res) => {
    try {

        const id = req.params.id;
        var sql = "DELETE FROM users WHERE id=?";
        await db.query(sql, [id], (err, result) => {
            if (err) {
                console.log("Error in deleting user", err);
            } else {
                res.status(200).json({ message: "User deleted successfully" });
            }
        });
    } catch (error) {
        console.log("Error in deleteUser controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const login = async (req, res) => {
 
    try {

        const { email, password } = req.body;
        var sql = "SELECT * FROM users WHERE email=? AND password=?";
      
        await db.query(sql, [email, password], (err, result) => {
            if (err) {
                console.log("Error in user login", err);
            } else {
                if (result.length > 0) {
                    const token = jwt.sign({ id: result[0].id, email: result[0].email }, process.env.SECRET_KEY, { expiresIn: "1h" });
                    res.status(200).json({ message: "Login successful", data: result[0], token: token });
                }


            }
        });
    } catch (error) {
        console.log("Error in login controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const sql = "SELECT * FROM users WHERE email = ?";

//     db.query(sql, [email], async (err, result) => {
//       if (err) {
//         console.log("DB Error:", err);
//         return res.status(500).json({ message: "Database error" });
//       }

//       if (result.length === 0) {
//         return res.status(401).json({ message: "Invalid email or password" });
//       }

//       const user = result[0];

//       // Compare hashed password
     

//       if (!isMatch) {
//         return res.status(401).json({ message: "Invalid email or password" });
//       }

//       // Generate JWT
//       const token = jwt.sign(
//         { id: user.id, email: user.email },
//         process.env.SECRET_KEY,
//         { expiresIn: "1h" }
//       );

//       res.status(200).json({
//         message: "Login successful",
//         user,
//         token,
//       });
//     });

//   } catch (error) {
//     console.log("Login Controller Error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

export const identityadd = async (req, res) => {
    try {
        
        const id = req.params.id;
        console.log("User ID:", id);
        const image = req.file;
        console.log("Uploaded File:", image);
       
        var sql = "UPDATE users SET identity_image=? WHERE id=?";
        await db.query(sql, [image.filename, id], (err, result) => {
            if (err) {
                console.log("Error in updating identity", err);
            } else {
                res.status(200).json({ message: "Identity updated successfully" });
            }
        });
    } catch (error) {
        console.log("Error in identityadd controller", error);
    }
}