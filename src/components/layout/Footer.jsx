import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <div>
          <h2>Burger Shop</h2>
          <p>We are trying to give you the best taste possible.</p>
          <p>We give attention to genuine feedback.</p>
          <h4>All right received @burgershop</h4>
        </div>
        <aside>
          <p>Follow us:</p>
          <a href="https://youtube.com" target="_blank"><FaYoutube/></a>
          <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
        </aside>

    </footer>
  )
}

export default Footer;
