import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Register() {
  const { createUser, setUser, updateUser, singInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setErr(" ");

    if (password.length < 6) {
      setErr("Password must be at least 6 character");
      return;
    }

    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      setErr("Password must have at least one uppercase");
      return;
    }

    if (!/^(?=.*[a-z]).*$/.test(password)) {
      setErr("Password must have at least one lowercase");
      return;
    }

    // crate a user
    createUser(email, password)
      .then((result) => {
        // update the user from firebase
        const updateValue = { displayName: name, photoURL: photo };
        updateUser(updateValue)
          .then(() => {
            setUser(result.user);
            e.target.reset();
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setErr("This email has already taken.");
        setUser(null);
      });
  };

  const handleSingIngWithGoogle = () => {
    singInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  return (
    <div className="hero  min-h-screen">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold text-center pt-8">Register now!</h1>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
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
            {err && <p className="text-red-600 ">{err}</p>}
            <label className="label">
              <p className="label-text-alt  ">
                if you have an account please{" "}
                <Link to={"/login"} className="link link-hover font-bold">
                  Login
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <div className="form-control mt-3">
            <button
              onClick={handleSingIngWithGoogle}
              type="button"
              className="btn btn-success text-white"
            >
              <FaGoogle />
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
