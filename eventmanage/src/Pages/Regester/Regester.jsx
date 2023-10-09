
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Authprovid/Authprovider";

const Regester = () => {

  const {createUser,handleGoogle} = useContext(AuthContex);


  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password)
    createUser(email, password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error)
    })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-green-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Regester now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter your Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <button onClick={handleGoogle} className="text-2xl bg-gray-300"><span className="text-blue-700">G</span><span className="text-yellow-700">oo</span><span className="text-blue-700">g</span> <span className="text-green-700">l</span> <span className="text-red-700">e</span></button>
            <p>
              you have account Please{" "}
              <Link className="text-primary" to="/login">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
