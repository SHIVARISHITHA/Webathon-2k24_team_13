import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import "./Login.css";
import { TfiMenu } from "react-icons/tfi";

function Login() {
  const navigate = useNavigate();
  const [rollno,setRollno]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
    const isnavigate=()=>{
        navigate(`/About`)

    }
    const isnavigate1=()=>{
        navigate(`/Login`)
    }
    const isnavigate3=()=>{
      navigate(`/Settings`)

  }
	
	const isnavigate5=()=>{
		navigate('/Dashboard')
	}
  const navigateToAlumnisignin = () => {
    navigate("/Alumnisignin");
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with login
      navigate("/Dashboard");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  return (
    <div className="h-screen pt-20  ">
      <div className="navbar bg-black-600 pb-4 fixed w-full z-50 top-0 left-0 ">
    <div className="navbar-start">
     <a className="navbar-item text-white-200 text-xl"><button onClick={isnavigate5}>AlumConnect</button></a>
    </div>
    <div className="navbar-end">
      <div class="dropdown">
	<label class="btn bg-black-600 my-2  " tabIndex="0"><TfiMenu style={{ fontSize: "1.75rem" , color:"white"}} /></label>
	<div class="dropdown-menu">
  <label htmlFor="modal-3" className="btn btn-sm btn-circle btn-ghost text-white-800 absolute right-2 top-2">✕</label>
  <a className="navbar-item text-white-800 text-xl"><button onClick={isnavigate}>About</button></a>
  <a className="navbar-item text-white-800 text-xl"><button onClick={isnavigate3}>Settings</button></a>

	</div>
</div>
    </div>
  </div>
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6 bg-slate-300 box-border h-35 w-50  h-90 p-4 flex items-center border-4 rounded-xl mt-20 ">
        <div className="flex  flex-col items-center">
          <h1 className="text-3xl font-semibold">Log In</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group ">
            <div className="form-field">
              <label className="form-label">Email address</label>
              <input
                placeholder="Type here"
                type="email"
                className="input max-w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>
            <div className="form-field">
              <label className="form-label">Enter Roll no</label>
              <input
                placeholder="Type here"
                type="rollno"
                className="input max-w-full"
                value={rollno}
                onChange={(e) => setRollno(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Password</label>
              <div className="password-input">
                <input
                  placeholder="Type here"
                  type={showPassword ? 'text' : 'password'}
                  className="input max-w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="eye-icon" type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
              {errors.password && <span className="text-red-500">{errors.password}</span>}
            </div>
            <div className="form-field">
              <div className="form-control justify-between">
                <div className="flex gap-2">
                  {/* <input type="checkbox" className="checkbox" />
                  <span>Remember me</span> */}
                </div>
                <label className="form-label">
                  <button className="btn link-underline-hover bg-slate-300 text-sm text-slate-900">Forgot your password?</button>
                </label>
              </div>
            </div>
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button type="submit" className="btn bg-slate-800 w-full text-white">Log in</button>
              </div>
            </div>

            <div className="form-field">
              <div className="form-control justify-center">
                <button type="button" className="btn link-underline-hover bg-slate-300 text-sm text-slate-900" onClick={() => navigate("/")}>Don't have an account yet? Signup.</button>
              </div>
            </div>
            <button
                  type="button"
                  className="btn bg-slate-300 link-underline-hover text-sm text-slate-900"
                  onClick={navigateToAlumnisignin}
                >
                  Are you an Alumni??
                </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
