import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { TfiMenu } from "react-icons/tfi";

function Signup() {
  const navigate = useNavigate();
  const [rollno, setRollno]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (value) => {
    const passwordErrors = [];

    if (value.length < 8) {
      passwordErrors.push("Password must be at least 8 characters long");
    }
    if (!/(?=.*[a-z])/.test(value)) {
      passwordErrors.push("Password must contain at least one lowercase letter");
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      passwordErrors.push("Password must contain at least one uppercase letter");
    }
    if (!/(?=.*\d)/.test(value)) {
      passwordErrors.push("Password must contain at least one digit");
    }
    if (!/(?=.[@$!%?&])/.test(value)) {
      passwordErrors.push("Password must contain at least one special character");
    }

    return passwordErrors;
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    const passwordErrors = validatePassword(value);
    setErrors((prevErrors) => ({ ...prevErrors, password: passwordErrors }));
    if (confirmPassword) {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with signup
      navigate("/Dashboard");
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (password.length === 0) {
      const passwordErrors = validatePassword(password);
      newErrors.password = passwordErrors;
      isValid = false;
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const isnavigate = () => {
    navigate('/About');
  };

  const isnavigate3 = () => {
    navigate('/Settings');
  };

  const isnavigate5 = () => {
    navigate('/Dashboard');
  };

  const navigateToLogin = () => {
    navigate("/Login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen pt-20">
      <div className="navbar  bg-slate-700 pb-4 fixed w-full z-50 top-0 left-0 ">
        <div className="navbar-start">
          <a className="navbar-item text-white text-xl"><button onClick={isnavigate5}>AlumConnect</button></a>
        </div>
        <div className="navbar-end">
          <div class="dropdown">
            <label class="btn bg-slate-600 my-2  " tabIndex="0"><TfiMenu style={{ fontSize: "1.75rem", color: "white" }} /></label>
            <div class="dropdown-menu">
              <label htmlFor="modal-3" className="btn btn-sm btn-circle btn-ghost text-slate-800 absolute right-2 top-2">✕</label>
              <a className="navbar-item text-slate-800 text-xl"><button onClick={isnavigate}>About</button></a>
              <a className="navbar-item text-slate-800 text-xl"><button onClick={isnavigate3}>Settings</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-md flex-col gap-6 bg-slate-300 box-border h-35 w-50  h-90 p-4 flex items-center border-4 rounded-xl mt-20">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold">Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="form-group w-full">
            <div className="form-field">
              <label className="form-label ">Email address</label>
              <input
                placeholder="Type here"
                type="email"
                className="input max-w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="error-dropdown text-red-500">{errors.email}</div>
              )}
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
                  type={showPassword ? "text" : "password"}
                  className={`input max-w-full ${errors.password.length > 0 ? 'border-red-500' : ''}`}
                  value={password}

                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <button
                  className="eye-icon"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
              {errors.password && errors.password.length > 0 && (
                <div className="error-dropdown">
                  {errors.password.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </div>
              )}
            </div>
            <div className="form-field">
              <label className="form-label">Confirm Password</label>
              <input
                placeholder="Type here"
                type="password"
                className={`input max-w-full ${errors.confirmPassword ? 'border-red-500' : ''}`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <div className="error-dropdown text-red-500">{errors.confirmPassword}</div>
              )}
            </div>
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button
                  type="submit"
                  className="btn bg-slate-800 w-full text-white"
                >
                  Sign up
                </button>
              </div>
            </div>

            <div className="form-field">
              <div className="form-control justify-center">
                <button
                  type="button"
                  className="btn bg-slate-300 link-underline-hover text-sm text-slate-900"
                  onClick={navigateToLogin}
                >
                  Already have an account? Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;