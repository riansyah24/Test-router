import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <div>
      <p>Ini profile page</p>
      <Link to="/about" className="text-red-500">Link menuju about</Link>
      <Link to="/" className="text-red-500">Link menuju home</Link>
    </div>
  )
}

export default Profile