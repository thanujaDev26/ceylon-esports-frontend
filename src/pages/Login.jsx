import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login and redirect based on role
    const dashboardRoutes = {
      admin: '/dashboard/admin',
      sponsor: '/dashboard/sponsor',
      creator: '/dashboard/creator',
      user: '/'
    };
    
    alert(`Login successful! Redirecting to ${formData.role} dashboard...`);
    window.location.href = dashboardRoutes[formData.role];
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          <Card className="auth-card">
            <h1 className="auth-title gradient-text">Welcome Back</h1>
            <p className="auth-subtitle">Sign in to your GameHub account</p>
            
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="role">Login As</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="user">User</option>
                  <option value="creator">Content Creator</option>
                  <option value="sponsor">Sponsor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary btn-full">
                Sign In
              </button>
            </form>
            
            <div className="auth-footer">
              <p>Don't have an account? <Link to="/register" className="auth-link">Sign up</Link></p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;