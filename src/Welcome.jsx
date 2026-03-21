export default function Welcome({ userData, onLogout }) {
  return (
    <div className="welcome-full-page">
      <div className="welcome-header">
        <h1>Welcome {userData?.username || 'User'}! </h1>
        
      </div>
    </div>
  )
}
