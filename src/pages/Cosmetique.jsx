import '../styles/Cosmetique.css';
import { Link } from 'react-router-dom';
import picture1 from '../assets/pro1.png';
import { useState } from 'react';

export default function Cosmetique() {
    const [products, setProducts] = useState([]);

    const package1 = [
        { id: 1, image: picture1, name: "savon1", price: 2000 },
        { id: 2, image: picture1, name: "savon2", price: 2000 },
        { id: 3, image: picture1, name: "savon3", price: 2000 },
        { id: 4, image: picture1, name: "savon4", price: 2000 },
    ];

    const package2 = [
        { id: 5, image: picture1, name: "savon5", price: 2000 },
        { id: 6, image: picture1, name: "savon6", price: 2000 },
        { id: 7, image: picture1, name: "savon7", price: 2000 },
        { id: 8, image: picture1, name: "savon8", price: 2000 },
    ];

    const package3 = [
        { id: 9, image: picture1, name: "savon9", price: 2000 },
        { id: 10, image: picture1, name: "savon10", price: 2000 },
        { id: 11, image: picture1, name: "savon11", price: 2000 },
        { id: 12, image: picture1, name: "savon12", price: 2000 },
    ];

    const package4 = [
        { id: 13, image: picture1, name: "savon13", price: 2000 },
        { id: 14, image: picture1, name: "savon14", price: 2000 },
        { id: 15, image: picture1, name: "savon15", price: 2000 },
        { id: 16, image: picture1, name: "savon16", price: 2000 },
    ];

    const packages = [package1, package2, package3, package4];

    // Empêcher les doublons dans le panier
    const ajouterProducts = (product) => {
        if (!products.find((p) => p.id === product.id)) {
            setProducts([...products, product]);
        }
    };

    const supprimerProducts = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    return (
        <section className='cos_main'>
            {packages.map((pack, idx) => (
                <div className='cos_content' key={idx}>
                    {pack.map((item) => (
                        <div className='cos_box' key={item.id}>
                            <img className='cos_img' src={item.image} alt='photo' />
                            <h4>
                                <p>Nom: {item.name}</p>
                                <p>Prix: {item.price} FCFA</p>
                            </h4>
                            <button
                                onClick={() => ajouterProducts(item)}
                                style={{
                                    marginTop: '10px',
                                    background: 'green',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    padding: '5px 10px',
                                    cursor: 'pointer'
                                }}
                                disabled={products.find((p) => p.id === item.id)}
                            >
                                {products.find((p) => p.id === item.id) ? "Ajouté" : "Ajouter au panier"}
                            </button>
                        </div>
                    ))}
                </div>
            ))}

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
                        {products.map((product) => (
                            <li key={product.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>{product.id} - {product.name} - {product.price} FCFA</span>
                                <button
                                    onClick={() => supprimerProducts(product.id)}
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