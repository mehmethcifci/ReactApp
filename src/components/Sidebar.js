import React from "react";

export const Sidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div className="sidebar-contents">
          <div id="sidebar-menu" className="sidebar-menu">
            <div className="mobile-show">
              <div className="offcanvas-menu">
                <div className="user-info align-center bg-theme text-center">
                  <span
                    className="lnr lnr-cross  text-white"
                    id="mobile_btn_close"
                  >
                    X
                  </span>
                  <a
                    href="javascript:void(0)"
                    className="d-block menu-style text-white">
                    <div className="user-avatar d-inline-block mr-3">
                      <img
                        src="assets/img/profiles/avatar-18.jpg"
                        alt="user avatar"
                        className="rounded-circle"
                        width="50"/>
                    </div>
                  </a>
                </div>
              </div>
              <div className="sidebar-input">
                <div className="top-nav-search">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here"
                    />
                    <button className="btn" type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <ul className="active">
              <li >
                <a href="/home" className="active">
                  <img src="assets/img/home.svg" alt="sidebar_img" />{" "}
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/profile">
                  <img src="assets/img/profile.svg" alt="sidebar_img" />{" "}
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a href="/newcompany">
                  <img src="assets/img/company.svg" alt="sidebar_img" />{" "}
                  <span> New Company</span>
                </a>
              </li>
              <li>
                <a href="/companylist">
                  <img src="assets/img/review.svg" alt="sidebar_img" />{" "}
                  <span>Company List</span>
                </a>
              </li>
              <li>
                <a href="/newmanager">
                  <img src="assets/img/employee.svg" alt="sidebar_img" />{" "}
                  <span>New Manager</span>
                </a>
              </li>
              
              
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
