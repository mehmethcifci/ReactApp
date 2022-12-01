import React from 'react'

export default function ResetPassword() {
  return (
    <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
          <div className="loginbox">
              <div className="login-right">
                <div className="login-right-wrap">
      <h2 className="card-title fw-bold mb-1">Reset Password 🔒</h2>
      <p className="card-text mb-2">Your new password must be different from previously used passwords</p>
      <form className="auth-reset-password-form mt-2"  method="POST" novalidate="novalidate">
        <div className="mb-1">
          <div className="d-flex justify-content-between pass_show">
            <label className="form-label" for="reset-password-new">New Password</label>
          </div>
          <div className="input-group input-group-merge form-password-toggle">
            <input className="form-control form-control-merge" id="reset-password-new" type="password" 
            name="reset-password-new" placeholder="············" aria-describedby="reset-password-new" 
            autofocus="" tabindex="1"/>
               
          </div>
        </div>
        <div className="mb-1">
          <div className="d-flex justify-content-between pass_show">
            <label className="form-label" for="reset-password-confirm">Confirm Password</label>
          </div>
          <div className="input-group input-group-merge form-password-toggle">
            <input className="form-control form-control-merge" id="reset-password-confirm" type="password" 
            name="reset-password-confirm" placeholder="············" 
            aria-describedby="reset-password-confirm" tabindex="2"/>
         </div>
        </div>
        <button className="btn btn-primary w-100 waves-effect waves-float waves-light" tabindex="3">Set New Password</button>
      </form>
      
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  
  )
}
