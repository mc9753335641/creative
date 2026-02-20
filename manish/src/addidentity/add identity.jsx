import React from "react";
import { useState } from "react";
import axios from "axios";

function AddIdentity() {
    const [file, setFile] = useState({identity_image: null});

  const handleFileChange = (e) => {
    setFile({ ...file, identity_image: e.target.files[0] });
  };

    const userId = localStorage.getItem("userId");
    const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    if (file.identity_image) {
      data.append("identity_image", file.identity_image);
    }

    axios
      .post(`http://localhost:5000/api/user/identityadd/${userId}`, data)
      .then((res) => {
        alert("Identity Add  Successfully");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return (
        <form onSubmit={handleSubmit} className="identity-form">
            <div className="form-group mb-3">
                <label htmlFor="file-input" className="form-label">Upload Identity Document</label>
                <input 
                    id="file-input"
                    type="file" 
                    onChange={handleFileChange}
                    required
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="form-control"
                />
                {file && <p className="text-success mt-2">Selected: {file.name}</p>}
            </div>
            <button type="submit" className="btn btn-primary">Upload</button>
        </form>
    );
}

export default AddIdentity;