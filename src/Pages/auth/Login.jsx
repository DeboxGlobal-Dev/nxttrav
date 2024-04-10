import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { login } from "../../reducer/authReducers";
import { axiosNew } from "../../http/axios/axios_new";

const Login = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //"username":"atuny0","password":"9uQFF1Lh";
  //"username":"hbingley1","password":"CQutx25i8r";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.username != "" && user.password != "") {
        setLoading(true);

        const { data } = await axiosNew.post("/auth/login", {
          username: user.username,
          password: user.password,
        });
        console.log(data);
        if (data?.username) {
          toast.success(`${data.username} is logged in`);
          // localStorage.setItem("auth", JSON.stringify(data));
          dispatch(
            login({
              user: data,
              isAuthenticated: true,
            })
          );
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setLoading(false);
          toast.error(`${data.message}`);
        }
      } else if (user.username != "" && user.password == "") {
        toast.error("Password is empty");
      } else if (user.username == "" && user.password != "") {
        toast.error("Username is empty");
      } else {
        toast.error("Please fill the username and password");
      }
    } catch (error) {
      setLoading(false);
      toast.error(`${error.message}`);
      console.log("Error while log in.", error);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  return (
    <>
      {/*<!-- Page content -->*/}
      <div className="page-content">
        {/*<!-- Main content -->*/}
        <div className="content-wrapper">
          {/*<!-- Content area -->*/}
          <div className="content d-flex justify-content-center align-items-center flex-column">
            {/* {isLoading && <Spinner />} */}
            <Toaster
              toastOptions={{
                className: "toastings",
              }}
            />
            {/* <ToastContainer/> */}
            {/*<!-- Login form -->*/}

            <form className="login-form" action="" onSubmit={handleSubmit}>
              <div className="card mb-0">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <i
                      className="icon-reading icon-2x text-slate-300 border-slate-300 
                    border-3 rounded-round p-3 mb-3 mt-1"
                    ></i>
                    <h5 className="mb-0">Login to your account</h5>
                    <span className="d-block text-muted">Your credentials</span>
                  </div>

                  <div className="form-group form-group-feedback form-group-feedback-left">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      onChange={handleChange}
                      value={user.username}
                    />
                    <div className="form-control-feedback">
                      <i className="icon-user text-muted"></i>
                    </div>
                  </div>

                  <div className="form-group form-group-feedback form-group-feedback-left">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                      onChange={handleChange}
                      value={user.password}
                      autoComplete="on"
                    />
                    <div className="form-control-feedback">
                      <i className="icon-lock2 text-muted"></i>
                    </div>
                  </div>

                  <div className="form-group d-flex align-items-center">
                    <div className="form-check mb-0" style={{ padding: "0px" }}>
                      <Checkbox defaultChecked size="small" value="2" />
                      {/* <input type="checkbox" name="remember" className="form-input-styled" 
                      checked data-fouc readOnly value="1"  /> */}
                      Remember
                      <label className="form-check-label"></label>
                    </div>

                    <a href="login_password_recover.html" className="ml-auto">
                      Forgot password?
                    </a>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      {isLoading ? "Loading.." : "Sign In"}{" "}
                      <i className="icon-circle-right2 ml-2"></i>
                    </button>
                  </div>

                  <span className="form-text text-center text-muted">
                    By continuing, you're confirming that you've read our{" "}
                    <a href="#">Terms &amp; Conditions</a> and{" "}
                    <a href="#">Cookie Policy</a>
                  </span>
                </div>
              </div>
            </form>
            {/*<!-- /login form -->*/}
          </div>
          {/*<!-- /content area -->*/}
        </div>
        {/*<!-- /main content -->*/}
      </div>
      {/*<!-- /page content -->*/}
      {/* <!-- Footer --> */}
      <div
        className="navbar navbar-expand-lg navbar-light"
        style={{
          display: "block",
          position: "absolute",
          bottom: "0px",
          width: "100%",
        }}
      >
        <div className="text-center d-lg-none w-100">
          <button
            type="button"
            className="navbar-toggler dropdown-toggle"
            data-toggle="collapse"
            data-target="#navbar-footer"
          >
            <i className="icon-unfold mr-2"></i>
            Footer
          </button>
        </div>
        <div className="navbar-collapse collapse" id="navbar-footer">
          <span className="navbar-text">
            &copy; 2024. Powered By{" "}
            <a href="https://www.deboxglobal.com/">
              <img
                src="https://shivdvn.com/staging/global_assets/images/debox-logo.png"
                alt="footerlogo"
                style={{ width: "50px", marginLeft: "5px" }}
              />
            </a>
          </span>
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item">
              <a
                href="https://www.deboxglobal.com/"
                className="navbar-nav-link font-weight-semibold"
              >
                <span className="text-pink-400">
                  <i className="icon-lifebuoy mr-2"></i> Support
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- /footer --> */}
    </>
  );
};

export default Login;
