import '../styles/Cosmetique.css';
import { Link } from 'react-router-dom';
import picture1 from '../assets/pro1.png';
import picture2 from '../assets/pro2.png';
import picture3 from '../assets/pro3.png';
import picture4 from '../assets/pro4.png';
import picture5 from '../assets/pro5.png';
import { useState } from 'react';

export default function Cosmetique() {
    const [products, setProducts] = useState([]);

    const package1 = [
        { id: 1, image: picture1, name: "savon1", price: 3000 },
        { id: 2, image: picture2, name: "savon2", price: 2000 },
    ];

     const package2 = [
        { id: 1, image: picture3, name: "savon3", price: 10000 },
        { id: 2, image: picture4, name: "savon4", price: 2000 },
    ];

     const package3 = [
        { id: 1, image: picture5, name: "savon5", price: 3000 },
    ];

    const services  = [
        "Décoration",
        "Confection de bouquet d'argent",
        "Box cadeau",
        "Confection de dragées"
    ];

    // Permettre les doublons dans le panier
    const ajouterProducts = (product) => {
        setProducts([...products, product]);
    };

    // Supprimer un seul exemplaire (par index)
    const supprimerProducts = (indexToRemove) => {
        setProducts(products.filter((_, idx) => idx !== indexToRemove));
    };

    return (
        <section className='cos_main'>
            <div className='cos_container'>
                <h2 className='cos_title'> 
                    Nos différents packs de cosmétiques
                </h2>
            </div>
           <div className='cos_container'>
            
 {package1.map((pack) => (
                    <div className='cos_box' key={pack.id}>
                        <img className='cos_img' src={pack.image} alt='photo' />
                        <h4>
                            <p>Nom: {pack.name}</p>
                            <p>Prix: {pack.price} FCFA</p>
                        </h4>
                        <button
                            onClick={() => ajouterProducts(pack)}
                            style={{
                                marginTop: '10px',
                                background: 'green',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '5px 10px',
                                cursor: 'pointer'
                            }}
                        >
                            Ajouter au panier
                        </button>
                    </div>
                ))}
           </div>


            <div className='cos_container'>
            
 {package2.map((pack) => (
                    <div className='cos_box' key={pack.id}>
                        <img className='cos_img' src={pack.image} alt='photo' />
                        <h4>
                            <p>Nom: {pack.name}</p>
                            <p>Prix: {pack.price} FCFA</p>
                        </h4>
                        <button
                            onClick={() => ajouterProducts(pack)}
                            style={{
                                marginTop: '10px',
                                background: 'green',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '5px 10px',
                                cursor: 'pointer'
                            }}
                        >
                            Ajouter au panier
                        </button>
                    </div>
                ))}
           </div>


           <div className='cos_container'>
            
 {package3.map((pack) => (
                    <div className='cos_box' key={pack.id}>
                        <img className='cos_img' src={pack.image} alt='photo' />
                        <h4>
                            <p>Nom: {pack.name}</p>
                            <p>Prix: {pack.price} FCFA</p>
                        </h4>
                        <button
                            onClick={() => ajouterProducts(pack)}
                            style={{
                                marginTop: '10px',
                                background: 'green',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '5px 10px',
                                cursor: 'pointer'
                            }}
                        >
                            Ajouter au panier
                        </button>
                    </div>
                ))}

                <h4 className='cos_title1'> 
                    Découvrer nos autres services :
                    <ul>
                        {services.map((service, idx) => (
                            <li key={idx}>{service}</li>
                        ))}
                    </ul>
                </h4>
           </div>

           
            <div className='cos_container' id='cos_shop'>
                            {/* Panier amélioré */}
            <div style={{
                marginTop: '40px',
                background: '#fff',
                border: '2px solid pink',
                borderRadius: '10px',
                maxWidth: 500,
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '20px'
            }}>
                <h3 style={{ textAlign: 'center', color: 'brown' }}>Mon panier</h3>
                {products.length === 0 ? (
                    <p style={{ textAlign: 'center' }}>Votre panier est vide.</p>
                ) : (
                    <ul className='cos_list' style={{ listStyle: 'none', padding: 0 }}>
                        {products.map((product, idx) => (
                            <li key={idx} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span> {product.name} - {product.price} FCFA</span>
                                <button
                                    onClick={() => supprimerProducts(idx)}
                                    style={{
                                        marginLeft: '10px',
                                        background: 'red',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        padding: '3px 8px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Supprimer
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
           </div>
        </section>
    );
}