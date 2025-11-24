import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { registerUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        // stote the image and gat the url
        const fromData = new fromData();
        fromData.append("image", profileImg);
        const img_api_url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_img_host_key
        }`;
        axios.post(img_api_url, fromData).then((res) => {
          //update user profile
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile).then(()=>{
            navigate(location.state|| '/')
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className=" text-5xl page-title">Create an Account</h2>
        <p>Register with ZapShift</p>
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="name"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}
            {/* name */}
            <label className="label">Photo</label>
            <input
              type="file"
              className="file-input"
              placeholder="Image"
              {...register("image", { required: true })}
            />
            {errors.image?.type === "required" && (
              <p className="text-red-500">Image is required</p>
            )}
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]).{8,}$/,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 characters or longer
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must include at least one uppercase letter, one
                lowercase letter, one number, and one special character.
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <SocialLogin></SocialLogin>
        <p>
          Already have an account
          <Link
            state={location.state}
            className="text-blue-500 underline"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
