import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [DOB, setDOB] = useState("");
  const [Gender, setGender] = useState("");
  const [BloodGroup, setBloodGroup] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = { email:Email, password:Password, name:Name, phone:MobileNumber,gender:Gender,bloodType:BloodGroup,role:"patient",photo:"" };
    try{
    const response = await fetch("http://localhost:3000/backend/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),});
    const data = await response.json();
    console.log(data);
    if (data.success) {
      toast.success(data.message || "Registration successful");
      setIsAuthenticated(true);
      navigate("/login");
    } else {
      toast.error(data.message || "Registration failed");
    }}catch(error){
      console.log("Error while registration", error);
      toast.error("Registration failed");}
  };
  if (isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <div className="container form-component register-form">
        <h2>Sign Up</h2>
        <p>Please Sign Up To Continue</p>
        <p>
        Join our community! Create your account by filling in the details below. Signing up gives you access to exclusive features and personalized content. Rest assured, your information is secure with us. If you need help, our support team is here to assist you. Welcome aboard!
        </p>
        <h2>Personal Information</h2>
        <form onSubmit={handleSubmit}> 
          <div>
            <input
              type="email"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            
            />
            <input
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={MobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}/>
            <input
              type="date"
              placeholder="Date of Birth"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          <div>
            <select value={Gender}
              onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select value={BloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}>
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
          <h2>Medical Information</h2>
          <div>
            <input
              type="text"
              placeholder="Height"
              
            />
            <input
              type="text"
              placeholder="Weight"
              
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Medical History , brief overview of past illnesses, allergies, medications"
              
            />
          </div>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Login Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }} >
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register