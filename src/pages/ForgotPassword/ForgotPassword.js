import React from "react";
import { useDispatch } from "react-redux";
import { fetchSendMail } from "../../store/features/adminSlice";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const [email, setMail] = React.useState("");

  /**
   * DİKKAT!!!
   * fonksiyonlarınız lütfen bileşenlerin gövdesinde yazmayın. yani
   * onClick methodunun içinde arrowfunction açarak yazmayın.
   */
  const sendMail = (e) => {
    e.preventDefault();
    dispatch(
      fetchSendMail({
        email: email,
      })
    );
   
  };

  
    

  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <img
              className="img-fluid logo-dark mb-2"
              src="assets/img/logo.png"
              alt="Logo"
            />
            <div className="loginbox">
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Forgot Password?</h1>
                  <p className="account-subtitle">
                    Enter your email to get a password reset link
                  </p>

                  <form action="login.html">
                    <div className="form-group">
                      <label className="form-control-label">
                        Email Address
                      </label>
                      <input
                        onChange={(text) => setMail(text.target.value)}
                        className="form-control"
                        type="text"
                      />
                    </div>
                    <div className="form-group mb-0">
                      <button
                        className="btn btn-lg btn-block btn-primary"
                        type="submit"
                        value="Log in"
                        onClick={sendMail} >
                        Reset Password
                      </button>
                    </div>
                  </form>

                  <div className="text-center dont-have">
                    Remember your password? <a href="/">Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
