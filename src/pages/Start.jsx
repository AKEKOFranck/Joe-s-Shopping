import '../styles/Start.css';
import GIF from '../assets/LoadingApp.gif';

export default function Start() {
    return(
        <div className='start_main'>
            <img className='start_img' alt='photoGIF' src={GIF}></img>
        </div>
    )
}