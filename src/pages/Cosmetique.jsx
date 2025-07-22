import '../styles/Cosmetique.css';
import {Link} from 'react-router-dom';
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
        { id: 5, image: picture1, name: "savon1", price: 2000 },
        { id: 6, image: picture1, name: "savon2", price: 2000 },
        { id: 7, image: picture1, name: "savon3", price: 2000 },
        { id: 8, image: picture1, name: "savon4", price: 2000 },
    ];

    const package3 = [
        { id: 9, image: picture1, name: "savon1", price: 2000 },
        { id: 10, image: picture1, name: "savon2", price: 2000 },
        { id: 11, image: picture1, name: "savon3", price: 2000 },
        { id: 12, image: picture1, name: "savon4", price: 2000 },
    ];

    const package4 = [
        { id: 13, image: picture1, name: "savon1", price: 2000 },
        { id: 14, image: picture1, name: "savon2", price: 2000 },
        { id: 15, image: picture1, name: "savon3", price: 2000 },
        { id: 16, image: picture1, name: "savon4", price: 2000 },
    ];

    const packages = [package1, package2, package3, package4];

    const ajouterProducts = (product) => {
        setProducts([...products, product]);
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
                                <p>Livraison: 1000 FCFA</p>
                            </h4>
                            <button onClick={() => ajouterProducts(item)}>
                                Ajouter au panier
                            </button>
                        </div>
                    ))}
                </div>
            ))}

            <ul className='cos_list'>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price} FCFA
                        <button onClick={() => supprimerProducts(product.id)}>supprimer</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}