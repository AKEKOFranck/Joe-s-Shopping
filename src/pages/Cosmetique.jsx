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
        { id: 1, image: picture1, name: "savon", price: 3000 },
        { id: 2, image: picture2, name: "savon", price: 2000 },
        { id: 3, image: picture3, name: "savon", price: 10000 },
        { id: 4, image: picture4, name: "savon", price: 2000 },
        { id: 5, image: picture5, name: "savon", price: 3000 },
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
            <div className='cos_content'>
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
                                <span>{product.id} - {product.name} - {product.price} FCFA</span>
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
        </section>
    );
}