import { Link } from "react-router-dom"
import "./Navbar.css"

export default (props) => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Product Index</Link>
    </div>
  )
}
