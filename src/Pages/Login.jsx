import React, { useState } from "react";
import { Link } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    const passLength = /^.{6,}$/;
    const passCase = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (!passLength.test(password)) {
      console.log("Password dismatch");
      setError(toast.error("Password must be atleast 6 characters"));
      return;
    } else if (!passCase.test(password)) {
      console.log("Lower & Upper Case needed");
      setError(toast.error("Password must contain Uppercase & Lowercase letter"));
      return;
    }
    setError("");
    setSuccess(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        Swal.fire({
          title: "Welcome!",
          text: "Logged in successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error.message);
        setError(toast.error("Check Email or Password"));
      });
  };
  const handleTogglePass = (event) => {
    event.preventDefault();
    setShowPass(!showPass);
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center p-8">
            <ToastContainer position="top-center" autoClose={3000} />
            <h1 className="text-5xl font-bold">Login Here!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  
                  {/* password & toggling to show pass */}
                  <div className="relative">
                    <label className="label">Password</label>
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      className="input"
                      placeholder="Password"
                    />
                    <button
                      onClick={handleTogglePass}
                      className=" btn-md absolute top-8 right-7"
                    >
                      {showPass ? <FaEyeSlash /> : <FaRegEye />}
                    </button>
                  </div>
                  <div>
                    <Link to="/forgetpass" className="link link-hover">
                      Forgot password?
                    </Link>
                  </div>
                  <button className="btn bg-gradient-to-r from-amber-400 to-amber-600 mt-4">Login</button>
                  <div>
                    <p>
                      Dont Have Account?{" "}
                      <Link to="/registration" className="text-cyan-600">
                        Regitster here.
                      </Link>
                    </p>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
