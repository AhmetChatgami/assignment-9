import React from "react";
import { Link } from "react-router";

const ForgetPass = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Forgot Password?</h1>
            <p className="py-6">
              Don't worrry! You can get back your account with just following this
              one step.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Proceed to Reset Password</label>
                <input type="email" className="input" placeholder="Input Valid Email" />

                <Link to="https://mail.google.com/mail/u/0/#inbox" className="btn bg-gradient-to-r from-amber-400 to-amber-600 mt-4 hover:text-white">Reset Password</Link>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
