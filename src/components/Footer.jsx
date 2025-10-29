import { BsInstagram } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import '../styles/Footer.css';
import { Link } from "react-router-dom";




export default function Footer() {

 


const socialData = [
        <Link to="/Info" className="icon">  <FaRegQuestionCircle className="foot_ico" />  Comment commander </Link>,
        <a href="https://www.instagram.com/joe_s_shopp?utm_source=ig_web_button_share_sheet&igsh=ZGFkMHJ5djdsdWg5" className="icon"> <BsInstagram className="foot_ico" /> Instagram </a>,
        <a href="https://www.tiktok.com/@jo_eshopp?_t=ZM-8yBBVJ9UtNN&_r=1" className="icon">  <AiFillTikTok className="foot_ico"  /> Tiktok </a>, 
        <a href="" className="icon">  <FaPhoneSquareAlt className="foot_ico" />  Contact </a>,
        <Link to="/InstallBT" className="icon">  <MdDownloadForOffline className="foot_ico"  />  Télécharger </Link>
];

   

    return(
          <footer className='foot_main'>
          
           <ul className="foot_box">
            {socialData.map((items, idx) => (
            <li className="foot_list" key={idx}>
                 {items}
            </li>
           ))}
           </ul>
        </footer>
    )
}