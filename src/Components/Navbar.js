import { NavLink } from "react-router-dom"
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/produts">Produts</NavLink>
        <NavLink to="/abaout">Abaout</NavLink>
    </nav>
  )
}

export default Navbar