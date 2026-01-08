import React from "react";
import { Link } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const Login = () => {
  const handleLogin = (e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center p-8">
            <h1 className="text-5xl font-bold">Login Here!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" name="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password" name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                  <div>
                    <p>Dont Have Account? <Link to="/registration" className="text-cyan-600">Regitster here.</Link></p>
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
