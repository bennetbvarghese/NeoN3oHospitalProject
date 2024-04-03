import React from 'react'

const Login = () => {
  return (
    <>
      <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
          voluptas expedita itaque ex, totam ad quod error?
        </p>
        <form>
          <input
            type="text"
            placeholder="Email"

          />
          <input
            type="password"
            placeholder="Password"
 
          />
          <input
            type="password"
            placeholder="Confirm Password"
           
          />
          <div

          >
          </div>
          <div >
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login