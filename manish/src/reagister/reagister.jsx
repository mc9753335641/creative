import React, { useState } from "react";
import axios from 'axios'
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    Image:"",
    phone:"",
    address:""
  });

  const handleChange = (e) => {
    //  e.preventDefault();

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const filechange=(e)=>{
    setFormData({...formData,Image:e.target.files[0]})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data=new FormData();
    data.append("name",formData.name);
    data.append("email",formData.email);
    data.append("password",formData.password);
    data.append("phone",formData.phone);
    data.append("address",formData.address);
    data.append("image",formData.Image);
    
    axios.post("http://localhost:5000/api/user/adduser",data).then((res)=>{
     console.log(res)
     alert("User registered successfully")
     formData.name("")
        formData.email("")
        formData.password("")
        formData.phone("")
        formData.address("")
        formData.Image("")
     }).catch((err)=>{
      console.log(err)
     })
   
  };


  return (
   
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill mb-0"
                    >
                      <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                        name="name"
                          value={formData.name}
                               onChange={handleChange}
                               required
                      />
                      <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill mb-0"
                    >
                      <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill mb-0"
                    >
                      <input
                        type="password"
                        id="form3Example4c"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill mb-0"
                    >
                      <input
                        type="address"
                        id="form3Example4c"
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Address
                      </label>
                    </div>
                  </div>
                   <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill mb-0"
                    >
                      <input
                        type="tel"
                        id="form3Example4c"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Phone Number
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill mb-0"
                    >
                      <input
                        type="file"
                        id="form3Example4cd"
                        className="form-control"
                        onChange={filechange}
 required
                      />
                      
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button
                      type="submit"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-primary btn-lg"
                    >
                      Register
                    </button> &nbsp;&nbsp;<button
                      type="button"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-primary btn-lg"
                      onClick={() => window.location.href="/"}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Register;
 