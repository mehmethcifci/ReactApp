import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchDoLogin } from "../../store/features/adminSlice";


export default function Login() {
  const dispatch = useDispatch();
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  /**
   * DİKKAT!!!
   * fonksiyonlarınız lütfen bileşenlerin gövdesinde yazmayın. yani
   * onClick methodunun içinde arrowfunction açarak yazmayın.
   */
  const doLogin = (e) => {
    e.preventDefault();
    
    dispatch(
      fetchDoLogin({
        mail: mail,
        password: password,
      })
    );
    navigate("/home");
  };
  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <img
              className="img-fluid logo-dark mb-2"
              src="assets/img/boost.png"
              alt="Logo"
            />
            <div className="loginbox">
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>
                  <form onSubmit={(e) => doLogin(e)}>
                    <div className="form-group">
                      <label className="form-control-label">
                        Email Address
                      </label>
                      <input
                        onChange={(text) => setMail(text.target.value)}
                        type="email"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Password</label>
                      <div className="pass-group">
                        <input
                          onChange={(text) => setPassword(text.target.value)}
                          type="password"
                          className="form-control pass-input"
                        />
                        <span className="fas fa-eye toggle-password"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6 text-right">
                          <a className="forgot-link" href="/forgot-password">
                            Forgot Password ?
                          </a>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-lg btn-block btn-primary">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
