import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    alert('Registration successful! Please login to continue.');
    window.location.href = '/login';
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          <Card className="auth-card">
            <h1 className="auth-title gradient-text">Join GameHub</h1>
            <p className="auth-subtitle">Create your account and start gaming</p>
            
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
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
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="role">Account Type</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="user">Gamer</option>
                  <option value="creator">Content Creator</option>
                  <option value="sponsor">Sponsor</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary btn-full">
                Create Account
              </button>
            </form>
            
            <div className="auth-footer">
              <p>Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;