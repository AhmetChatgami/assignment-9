import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../Firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass]= useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("registration done", email, name, password);


    const passLength = /^.{6,}$/;
    const passCase = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if(!passLength.test(password)){
      console.log('Password dismatch')
      setError(toast.error("Password must be 6 character"))
      return;
    }

    else if(!passCase.test(password)){
      console.log('Lower & Upper Case needed')
      setError(toast.error("One Upper Case & Lower Case needed."))
      return;
    }

    setError('');
    setSuccess(false);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("new user:", result.user);
        setSuccess(true);
        Swal.fire({
          title: "Welcome!",
          text: "Acount created successfully!",
          icon: "success",
        });
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(toast.error("Email Already Registered!"));
        ;
      });

    };
    const handleTogglePass = (event)=>{
      event.preventDefault();
      setShowPass(!showPass)
    }
  return (
    <div>
      <h1 className="text-3xl text-center font-medium">
        Love to see you here!
      </h1>
      <ToastContainer position="top-center" autoClose={3000} />
      {/* {error & alert("email already used")} */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    name="name"
                    placeholder="Name"
                  />

                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <div className="relative">
                    <label className="label">Password</label>
                  <input
                    type={showPass? 'text': 'password'}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <button onClick= {handleTogglePass} className=" btn-md absolute top-8 right-7">{showPass? <FaEyeSlash/>: <FaRegEye />}</button>
                  </div>
                  <div>
                    <p>
                      Have an account?{" "}
                      <Link to="/login" className="text-cyan-800 font-bold">
                        Login
                      </Link>{" "}
                      here
                    </p>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
