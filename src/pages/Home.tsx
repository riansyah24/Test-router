import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <p>Ini home page</p>
      <Link to="/about" className="text-red-500">Link menuju about</Link>
      <Link to="/profile" className="text-red-500">Link menuju profile</Link>
    </div>
  )
}

export default Home