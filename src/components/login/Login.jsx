import '../../styles/login.scss';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons';

const Login = () => {

  return (
    <main className="login-main">
        <div className='login-btns'>
            <button className='login'>Login</button>
            <button className='register'>Register</button>
        </div>
        
        <section className='login-section'>
            <p>Sign in with:</p>
            <IconContext.Provider value={{className: 'sm-icons'}}>
                <div className='social-media'>
                    <a href='https://facebook.com' target='_blank'><FaFacebookSquare /></a>
                    <a href='https://x.com' target='_blank'><FaTwitter /></a>
                    <a href='https://instagram.com' target='_blank'><FaInstagram /></a>
                    <a href='https://linkedin.com' target='_blank'><FaLinkedin /></a>
                </div>
            </IconContext.Provider>
            <p>or:</p>
            <form>
                <div className="inputs">
                    <label htmlFor="email">
                    <input type="email" id="email" placeholder="Email address" pattern=".+@example\.com" minLength="7" required></input>
                    </label>
                    <label htmlFor="password">
                    <input type="password" id="password" placeholder="password" minLength="7" required></input>
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
            </form>
        </section>
    </main>
  )
}

export default Login;
