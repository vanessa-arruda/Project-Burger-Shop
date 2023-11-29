// Write all the code here
import { NavLink, Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import DropdownMenu from "./DropdownMenu";
import Logo from "../../assets/burgershop-logo.png";

const Header = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src={Logo} width="50px" height="auto"/>
        </Link>
      </div>
      <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/cart"><LuShoppingCart/></NavLink>
          <DropdownMenu/>
      </div>
    </nav>
  )
}

export default Header;
