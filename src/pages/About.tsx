import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
      <p>Ini about page</p>
      <Link to="/" className="text-red-500">Link menuju home</Link>
      <Link to="/profile" className="text-red-500">Link menuju profile</Link>
    </div>
  )
}

export default About