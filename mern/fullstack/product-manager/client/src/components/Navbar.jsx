import { Link } from "react-router-dom"
import "./Navbar.css"

export default (props) => {
  return (
    <>
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Product Index</Link>
      <Link to="/products/new">Create a Product</Link>
    </div>
    <hr style={{border: "1px solid gray", marginBottom: "1em"}} />
    </>
  )
}
