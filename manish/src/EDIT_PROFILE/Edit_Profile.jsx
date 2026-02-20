
import React, { useState, useEffect } from "react";
import axios from "axios";

function Edit_Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    image: null,
  });
 const [data,setdata]=useState(false)
  const userId = localStorage.getItem("userId");

  
  useEffect(() => {
    if (!userId) return;

    axios
      .get(`http://localhost:5000/api/user/getuserbyid/${userId}`)
      .then((res) => {
        console.log("Response:", res.data.data[0]);

     
        const user = res.data.data[0];

        setFormData({
          name: user.name ,
          email: user.email ,
          password: "",
          phone: user.phone ,
          address: user.address ,
          image: null,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("phone", formData.phone);
    data.append("address", formData.address);
    if (formData.image) {
      data.append("image", formData.image);
    }

    axios
      .put(`http://localhost:5000/api/user/updateuser/${userId}`, data)
      .then((res) => {
        alert("Profile Updated Successfully");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        
        <h3 className="text-center mb-4">Edit Profile</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password || ""}
              onChange={handleChange}
              placeholder="New Password (Optional)"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="address"
              className="form-control"
              value={formData.address || ""}
              onChange={handleChange}
              placeholder="Address"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              className="form-control"
              value={formData.phone || ""}
              onChange={handleChange}
              placeholder="Phone"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Update Profile
          </button>
          <br />
          <br/>
          <button type="button" className="btn btn-primary w-100" onClick={() => window.location.href="/register"}>
            ADD MEMBER
          </button>
          <br/>
          <br/>
       < button type="button" className="btn btn-primary w-100" onClick={() => window.location.href="/addidentity"}>
            ADD IDENTITY
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit_Profile;