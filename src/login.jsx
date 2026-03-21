import { useState } from 'react'

export default function Login({ onLoginSuccess, onGoToSignUp }) {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  })

  const [error, setError] = useState('')

  // STATIC USER DATA STORED HERE
  const staticUsers = [
    {
      fullName: "John Doe",
      username: "john",
      phone: "1234567890",
      email: "john@email.com",
      password: "123456"
    },
    {
      fullName: "Jane Smith",
      username: "jane",
      phone: "9876543210",
      email: "jane@email.com",
      password: "jane123"
    },
    {
      fullName: "Test User",
      username: "testuser",
      phone: "5555555555",
      email: "test@email.com",
      password: "test123"
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.identifier || !formData.password) {
      setError('Please fill in both fields')
      return
    }

    // Check if user exists in static data
    const user = staticUsers.find(user =>
      (user.username === formData.identifier ||
       user.phone === formData.identifier ||
       user.email === formData.identifier) &&
      user.password === formData.password
    )

    if (user) {
        console.log('User logged in:', user.username)
      // Login successful - pass user data to welcome page
      onLoginSuccess(user)
    } else {
      setError('Invalid username/phone/email or password')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <p className="subtitle">Welcome back! Please sign in to your account</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="identifier">Username, Phone, or Email</label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              placeholder="Enter your username, phone number, or email"
              value={formData.identifier}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="submit-button">
            Login
          </button>
        </form>

        <div className="signup-link">
          <p>
            Don't have an account?{' '}
            <a href="#" onClick={(e) => {
              e.preventDefault()
              onGoToSignUp()
            }}>
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}