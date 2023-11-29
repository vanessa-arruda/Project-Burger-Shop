import '../../styles/login.scss';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    // if isAuthenticated = true then display Profile (affects dropdownmenu),
    // if isAuthenticated = false then display Login/Register,
    // if hasAccount = false, click tab Register and change body to createnewaccount.
  return (
    <main className="login-main">
        <div className='login-btns'>
            <button className='login'>Login</button>
            <button className='logout'>Register</button>
        </div>
        
        <section className='login-section'>
            <p>Sign in with:</p>
            <div className="social-media">
                <FaFacebookSquare />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
            </div>
            <p>or:</p>
            <div className="inputs">
                <label htmlFor="email">
                <input type="email" id="email" placeholder="Email address" pattern=".+@example\.com" minlength="7" required></input>
                </label>
                <label htmlFor="password">
                <input type="password" id="password" placeholder="password" minlength="7" required></input>
                </label>
            </div>
            <div className="remember-password">
                <div>
                    <input type="checkbox" name="remember" value="remember"></input>
                    <label htmlFor="remember">Remember me</label>
                </div>
                <a href="">forgot password?</a>
            </div>
            <Link to="/me">
                <button className="sign-in">Sign In</button>
            </Link>
            <p>Not a member? <a href="">Register</a></p>
        </section>
    </main>
  )
}

export default Login;
