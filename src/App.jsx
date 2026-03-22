import { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'
import Welcome from './Welcome'
export default function App() {
    const [currentPage, setCurrentPage] = useState('login')
const [userData, setUserData] = useState({
    fullName: '',
    username: '',
    password: '',
    phone: '',
    email: '',
    location: '',
    birthdate: '',
  })
  const handleSignUpSubmit = (data) => {
    setUserData(data)    
    setCurrentPage('welcome')
  }
 const handleLoginSuccess = (data) => {
      setUserData(data)
     setCurrentPage('welcome')
  }
  const goToLogin = () => setCurrentPage('login')
  const goToSignUp = () => setCurrentPage('signup')
  if (currentPage === 'welcome') {
    return <Welcome userData={userData} onLogout={() => setCurrentPage('login')} />
  }

  if (currentPage === 'login') {
    return <Login onLoginSuccess={handleLoginSuccess} onGoToSignUp={goToSignUp} />
  }

  return <SignUp onSubmit={handleSignUpSubmit} onGoToLogin={goToLogin} />
}
