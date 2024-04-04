import React ,{useState}from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'; // Assuming you're using Axios for requests

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/backend/auth/signin', { email, password });

      if (!response.data.success) {
        throw new Error(response.data.message || 'Login failed');
      }

      const token = response.data.token; // Extract token (adjust based on your backend response)
      console.log('Login successful, token:', token);

      // Store token securely (e.g., local storage, cookies)
      localStorage.setItem('authToken', token);

      // Navigate to a protected route or user dashboard
      toast.success('Login successful!');
      // ... navigate to protected area
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message);
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