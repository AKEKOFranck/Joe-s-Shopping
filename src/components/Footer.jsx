import { BsInstagram } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import '../styles/Footer.css';




export default function Footer() {
    const helpData = [
    {
        id: 1, 
        name: "Besoin d'aide", 
        items: [
            "Laissez un message au : ",
            "+225 01-03-34-62-30",
            "Fournissez :",
            "votre nom complet", 
            "votre adresse", 
            "la liste de vos articles",
            "Les frais de livraison seront fixés",
            "en fonction de la zone de livraison",
        ]
    }
];

const socialData = {
    id: 2,
    name: "Réseaux",
    items: [
        <a href="https://www.instagram.com/joe_s_shopp?utm_source=ig_web_button_share_sheet&igsh=ZGFkMHJ5djdsdWg5" className="icon"> <BsInstagram key="instagram" /> </a>,
        <a href="https://www.tiktok.com/@jo_eshopp?_t=ZM-8yBBVJ9UtNN&_r=1" className="icon">  <AiFillTikTok key="tiktok" />  </a>,
    ]
};

const serviceData = {
    id: 3,
    name: "Autres services",
    items: [
        "plus d'info au :",
        "+225 01-03-34-62-30",
    ]
}
    return(
          <footer className='foot_main'>
            <div className='foot_box'>
                <h3 className='foot_title'>{helpData[0].name}</h3>
                <ul className='foot_list'>
                    {helpData[0].items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className='foot_box'>
                <h3 className='foot_title'>{socialData.name}</h3>
                <div className="foot_icons">
                    {socialData.items.map((icon, index) => (
                        <span key={index} className="icon">{icon}</span>
                    ))}
                </div>
            </div>

             <div className='foot_box'>
                <h3 className='foot_title'>{serviceData.name}</h3>
                <ul className='foot_list'>
                    {serviceData.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}