import { Link } from 'react-router-dom';
import '../styles/First.css';

export default function First() {
    return(
          <div className="first_main">

            <div className="first_box">
                 <Link to="/Cosmetique" className='link_bt'> <button className="first_bt">  Explorer </button>   </Link> 
            </div>
            
          </div>
    )
}