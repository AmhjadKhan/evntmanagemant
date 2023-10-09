import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Authprovid/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { login, user } = useContext(AuthContex);
  

  const handleLogin = (e) => {
    e.preventDefault();
    if (user) {
      toast("Your Account is alredy Login");
      return;
    }
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    login(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-gray-400">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {user ? (
                  <button className="btn btn-primary">Login</button>
                ) : (
                  <button className="btn btn-primary">
                    Login
                  </button>
                )}
              </div>
            </form>
            <p>
              No Account please{" "}
              <Link className="text-primary" to="/regester">
                REGISTER
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
