import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/global_assets/images/logo_light.png";
import placeholder from "../../../public/global_assets/images/placeholders/placeholder.jpg";

const Header = () => {
  const [user, setUserData] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("auth"));
    if (user) {
      setUserData(user);
      console.log("get from local", user.firstName);
    }
  }, []);

  return (
    <>
      {/* // <!-- Main navbar --> */}
      <div className="navbar navbar-expand-md navbar-dark border-transparent">
        <div className="navbar-brand">
          <NavLink to="/">
            <img src={logo} alt="limitless" />
          </NavLink>
        </div>

        <div className="d-md-none">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-mobile"
          >
            <i className="icon-paragraph-justify3"></i>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbar-mobile">
          <span className="navbar-text ml-md-3 mr-md-auto">
            <span className="badge bg-success">Online</span>
          </span>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                href="/#"
                className="navbar-nav-link dropdown-toggle caret-0"
                data-toggle="dropdown"
              >
                <i className="icon-people"></i>
                <span className="d-md-none ml-2">Users</span>
              </a>

              <div className="dropdown-menu dropdown-menu-right dropdown-content wmin-md-300">
                <div className="dropdown-content-header">
                  <span className="font-weight-semibold">Users online</span>
                  <a href="/#" className="text-default">
                    <i className="icon-search4 font-size-base"></i>
                  </a>
                </div>

                <div className="dropdown-content-body dropdown-scrollable">
                  <ul className="media-list">
                    <li className="media">
                      <div className="mr-3">
                        <img
                          src={placeholder}
                          width="36"
                          height="36"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <a
                          href="/#"
                          className="media-title font-weight-semibold"
                        >
                          Jordana Ansley
                        </a>
                        <span className="d-block text-muted font-size-sm">
                          Lead web developer
                        </span>
                      </div>
                      <div className="ml-3 align-self-center">
                        <span className="badge badge-mark border-success"></span>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <img
                          src={placeholder}
                          width="36"
                          height="36"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <a
                          href="/#"
                          className="media-title font-weight-semibold"
                        >
                          Will Brason
                        </a>
                        <span className="d-block text-muted font-size-sm">
                          Marketing manager
                        </span>
                      </div>
                      <div className="ml-3 align-self-center">
                        <span className="badge badge-mark border-danger"></span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="dropdown-content-footer bg-light">
                  <a href="/#" className="text-grey mr-auto">
                    All users
                  </a>
                  <a href="/#" className="text-grey">
                    <i className="icon-gear"></i>
                  </a>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                href="/#"
                className="navbar-nav-link dropdown-toggle caret-0"
                data-toggle="dropdown"
              >
                <i className="icon-bubbles4"></i>
                <span className="d-md-none ml-2">Messages</span>
                <span className="badge badge-pill bg-warning-400 ml-auto ml-md-0">
                  2
                </span>
              </a>

              <div className="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
                <div className="dropdown-content-header">
                  <span className="font-weight-semibold">Messages</span>
                  <a href="/#" className="text-default">
                    <i className="icon-compose"></i>
                  </a>
                </div>

                <div className="dropdown-content-body dropdown-scrollable">
                  <ul className="media-list">
                    <li className="media">
                      <div className="mr-3 position-relative">
                        <img
                          src={placeholder}
                          width="36"
                          height="36"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>

                      <div className="media-body">
                        <div className="media-title">
                          <a href="/#">
                            <span className="font-weight-semibold">
                              James Alexander
                            </span>
                            <span className="text-muted float-right font-size-sm">
                              04:58
                            </span>
                          </a>
                        </div>

                        <span className="text-muted">
                          who knows, maybe that would be the best thing for
                          me...
                        </span>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <img
                          src={placeholder}
                          width="36"
                          height="36"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <div className="media-title">
                          <a href="/#">
                            <span className="font-weight-semibold">
                              Richard Vango
                            </span>
                            <span className="text-muted float-right font-size-sm">
                              Mon
                            </span>
                          </a>
                        </div>

                        <span className="text-muted">
                          Other travelling salesmen live a life of luxury...
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-content-footer justify-content-center p-0">
                  <a
                    href="/#"
                    className="bg-light text-grey w-100 py-2"
                    data-popup="tooltip"
                    title=""
                    data-original-title="Load more"
                  >
                    <i className="icon-menu7 d-block top-0"></i>
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown dropdown-user">
              <a
                href="/#"
                className="navbar-nav-link dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://deboxglobal.in/salescrm/profilepic/1597303900iifa.PNG"
                  className="rounded-circle"
                  alt="user"
                />
                <span>Satendra Gurjar</span>
              </a>

              <div className="dropdown-menu dropdown-menu-right">
                <NavLink to="/profile" className="dropdown-item">
                  <i className="fa-solid fa-user"></i> My profile
                </NavLink>
                <NavLink to="/setting" className="dropdown-item">
                  <i className="fa-solid fa-gear"></i> Setting
                </NavLink>
                <a href="/#" className="dropdown-item">
                  <i className="icon-comment-discussion"></i> Messages
                  <span className="badge badge-pill bg-blue ml-auto">58</span>
                </a>
                <NavLink to="/logout" className="dropdown-item">
                  <i className="icon-switch2"></i> Logout
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* // <!-- main end --> */}
      {/* <!-- Alternative navbar --> */}
      <div className="navbar navbar-expand-md navbar-light navbar-sticky navbar-static headroom headroom--not-bottom headroom--pinned headroom--top">
        <div className="text-center d-md-none w-100">
          <button
            type="button"
            className="navbar-toggler dropdown-toggle"
            data-toggle="collapse"
            data-target="#navbar-second"
          >
            <i className="icon-unfold mr-2"></i>
            Alternative navbar
          </button>
        </div>

        <div className="navbar-collapse collapse" id="navbar-second">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to={"/"}
                activestyle={{ color: "red" }}
                className="navbar-nav-link"
              >
                <i className="icon-home mr-2"></i>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/mail"} className="navbar-nav-link">
                <i className="icon-envelope	mr-2"></i>
                Mail
                <span className="badge badge-pill bg-teal-800 position-static ml-auto ml-md-2">
                  5
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/querylist"} className="navbar-nav-link">
                <i className="icon-git-pull-request	mr-2"></i>
                Query
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/master"} className="navbar-nav-link">
                <i className="icon-git-pull-request	mr-2"></i>
                Master
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- Alternative navbar  End--> */}
    </>
  );
};

export default Header;
