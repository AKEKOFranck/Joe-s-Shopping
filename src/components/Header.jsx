import { Link } from "react-router-dom";
import '../styles/Header.css';
import { IoIosHome } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Header() {
  return (
      <header className="head">
            
                <Link to="/" className='navlink'><IoIosHome /></Link>
                <Link to="/Cosmetique" className="navlink">Cosmétiques</Link>
                <Link to='/Info' className='navlink'><RiCustomerService2Line /></Link>
        </header>
  );
}