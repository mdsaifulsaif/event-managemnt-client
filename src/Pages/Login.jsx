import React, { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useLocation, useNavigate } from "react-router";

import Swal from "sweetalert2";
import { AuthContext } from "../AuthContext/AuthContextProvider";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { LoginUser, googleLogin, setUser } = useContext(AuthContext);
  const [errormassage, setErrorMessage] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    LoginUser(email, password)
      .then((res) => {
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
          iconColor: "#129990",
          confirmButtonColor: "#129990",
          draggable: true,
        });

        if (location.state === null) {
          navigate("/");
        } else {
          navigate(location.state);
        }
      })
      .catch((error) => {
        const errom = error.message;
        setErrorMessage(errom);
        Swal.fire({
          title: errormassage,
          icon: "error",
          iconColor: "#FF0000",
          confirmButtonColor: "#008000",
          draggable: true,
        });
      });
  };

  //handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;

        if (user) {
          Swal.fire({
            title: "Login Successfully!",
            icon: "success",
            iconColor: "#129990",
            confirmButtonColor: "#129990",
            draggable: true,
          });
        }

        if (location.state === null) {
          navigate("/");
        } else {
          navigate(location.state);
        }
      })
      .catch((error) => {
        const errom = error.message;
        setErrorMessage(errom);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen dark:text-gray-900">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <Helmet>
          <title>Impacthub | Login</title>
        </Helmet>
        <div className="card-body">
          <h1 className="text-3xl font-bold ">Login now!</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              required
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              required
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn bg-[#129990] text-white mt-4">
              Login
            </button>

            <p className="text-sm mt-2">
              Dont’t Have An Account ?{" "}
              <Link className="text-blue-700" to="/register">
                Register
              </Link>
            </p>
            <p className="text-red-700 ">{errormassage}</p>
          </form>
          <div className="mx-auto">
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
