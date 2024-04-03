import React from 'react'

const Register = () => {
  return (
    <>
      <div className="container form-component register-form">
        <h2>Sign Up</h2>
        <p>Please Sign Up To Continue</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
          voluptas expedita itaque ex, totam ad quod error?
        </p>
        <form>
          <div>
            <input
              type="text"
              placeholder="First Name"
          
            
            />
            <input
              type="text"
              placeholder="Last Name"
           
              
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              
            />
            <input
              type="number"
              placeholder="Mobile Number"
              
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="NIC"
              
            />
            <input
              type="date"
              placeholder="Date of Birth"
              
            />
          </div>
          <div>
            <select >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              
            />
          </div>
          <div
            
          >
            <p>Already Registered?</p>
          </div>
          <div >
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register