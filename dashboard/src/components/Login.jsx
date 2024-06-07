import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const values = { email, password }; // Use destructuring for clarity

    try {
      const response = await fetch('http://localhost:3000/backend/auth/signin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) { // Check for HTTP errors
        throw new Error('Login failed'); // Or handle specific error codes
      }

      const data = await response.json();
      console.log(data);
      if (data.success) { // Assuming the backend response includes a success property
        // Handle successful login (e.g., store token, navigate)
        toast.success(data.message || "Login successful");
        setIsAuthenticated(true);
        navigateTo("/"); // Or based on your app logic
      } else {
        toast.error(data.message || "Invalid Credentials"); // Use error message from response, if provided
      }
    } catch (error) {
      console.log("Error while login", error);
      toast.error("Login failed");
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <section className="container form-component">
        <img src="/logo.png" alt="logo" className="logo-img" />
        <h1 className="form-title"> Welcome TO Neo N3o Hospital </h1>
        <p>Only Admins Are Allowed To Access These Resources!</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
