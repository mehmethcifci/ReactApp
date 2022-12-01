import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProfileDetail } from "../store/features/adminSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState({});
  const getHome = () => {
    /**
     * redux bişlenlerini tetiklemek için dispatch kullanıyoruz.
     */
    dispatch(fetchProfileDetail()).then((data) => setAdmin(data.payload));
  };

  const logout = () => {
    localStorage.removeItem('User');
    window.location.href="/login";
  
  }
  useEffect(() => {
    getHome();
  }, []);
  console.log(admin);
  return (
    <div className="header">
      <div className="header-left">
        <a href="/home" className="logo">
          <img src="assets/img/boost.png" alt="Logo" />
        </a>
        <a href="/home" className="logo logo-small">
        <img
            src="assets/img/boost.png"
            alt="Logo"
            width="30"
            height="30"
          />
        </a>
        <a href="javascript:void(0);" id="toggle_btn">
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
      </div>
      <ul className="nav user-menu">
        <li className="nav-item dropdown">
          
          <div className="dropdown-menu notifications">
            
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt=""
                          src="assets/img/profiles/avatar-02.jpg"
                        />
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown" >
            <span className="user-img">
              <img src="assets/img/pngwing.com.png" alt="" />
              <span className="status online"></span>
            </span>
            <span>{admin.name} {admin.lastName}</span>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/profile">
              <i data-feather="user" className="mr-1"></i> Profile
            </a>
          
            <a className="dropdown-item" onClick={logout}>
              <i data-feather="log-out" className="mr-1"></i> Logout
            </a>
          </div>
        </li>
      </ul>
      
    </div>
  );
};
