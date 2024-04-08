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
              type="email"
              placeholder="Email"
          
            
            />
            <input
              type="password"
              placeholder="Password"
           
              
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Name"
              
            />
            <input
              type="number"
              placeholder="Mobile Number"
              
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"/>
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
            <select >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
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