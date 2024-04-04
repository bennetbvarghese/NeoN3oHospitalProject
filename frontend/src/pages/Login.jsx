import React ,{useState}from 'react'
import { toast ,ToastContainer} from 'react-toastify';
import {Link , useNavigate} from 'react-router-dom';
import axios from 'axios'; // Assuming you're using Axios for requests

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo=useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
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
        navigateTo("/"); // Or based on your app logic
      } else {
        toast.error(data.message || "Invalid Credentials"); // Use error message from response, if provided
      }
    } catch (error) {
      console.log("Error while login", error);
      toast.error("Login failed");
    }
  };

  return (
    <>
  <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
          voluptas expedita itaque ex, totam ad quod error?
        </p>
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