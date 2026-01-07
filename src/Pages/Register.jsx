import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router";

const Register = () => {
    const handleRegister = (e)=>{
        e.preventDefault();
        const name= e.target.name.value;
        const email= e.target.email.value;
        const password= e.target.password.value;
        console.log('registration done', email, name, password)

        createUserWithEmailAndPassword
    }
  return (
    <div>
      <h1 className="text-3xl text-center font-medium">
        Love to see you here!
      </h1>
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
                  <input type="text" className="input" name="name" placeholder="Name" />

                  <label className="label">Email</label>
                  <input type="email" name="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password" name="password"
                    className="input"
                    placeholder="Password"
                  />
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
