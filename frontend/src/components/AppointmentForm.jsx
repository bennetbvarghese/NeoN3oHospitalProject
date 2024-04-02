import React from 'react'

const AppointmentForm = () => {
  return (
    <>
      <div className="container form-component appointment-form">
        <h2>Appointment</h2>
        <form >
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
              type="date"
              placeholder="Appointment Date"
              
            />
          </div>
          <div>
            <select
              
            >
              <option value="">Select Department</option>
            </select>
            <select
            >
              <option value="">Select Doctor</option>
            </select>
          </div>
          <textarea
            rows="10"
          
            placeholder="Address"
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Have you visited before?</p>
            <input
              type="checkbox"
              style={{ flex: "none", width: "25px" }}
            />
          </div>
          <button style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
        </form>
      </div>
    </>
  )
}

export default AppointmentForm