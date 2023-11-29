import logo from "../../assets/burgershop-logo.png";
import "../../styles/logout.scss";

const Logout = () => {
  return (
    <div className="logout-cotainer">
        <img src={logo} alt='logo'/>
        <h1>You're successfully logged out.</h1>
    </div>
  )
}

export default Logout;
