import { useState } from 'react'

export default function SignUp({ onSubmit, onGoToLogin }) {

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    phone: '',
    email: '',
    location: '',
    birthdate: '',
  })
  const [error, setError] = useState('')
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData,[name]: value,  })
    setError('') 
  }
  const handleSubmit = (e) => {
    e.preventDefault() 
    if (
      !formData.fullName ||
      !formData.username ||
      !formData.password ||
      !formData.phone ||
      !formData.email ||
      !formData.location ||
      !formData.birthdate
    ) {
      setError('Please fill in all fields')
      return
    }
    if (formData.password.trim().length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email')
      return
    }
    console.log('User signed up:', formData.username)  
  onSubmit(formData)
    onSubmit(formData)
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <p className="subtitle">Create your account</p>

        {/* Show error message if there is one */}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          {/* Username Field */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password (at least 6 characters)"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          {/* Phone Number Field */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Location Field */}
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter your city or location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>

          {/* Birthdate Field */}
          <div className="form-group">
            <label htmlFor="birthdate">Birthdate</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleInputChange}
            />
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>

        {/* Link to Login */}
        <div className="login-link">
          <p>Already have an account? <a href="#" onClick={(e) => {
            e.preventDefault()
            onGoToLogin() // Use the function instead of reload
          }}>Login here</a></p>
        </div>
      </div>
    </div>
  )
}
