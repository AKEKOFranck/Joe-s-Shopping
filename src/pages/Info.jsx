import '../styles/Info.css';

export default function Info() {

    const infoData1 = [
        "veuillez suivre ces étapes : ",
        " Rassemblez vos articles souhaités ",
        "Envoyez la liste par message en incluant :",
         "Votre nom complet.",
         "Votre adresse de livraison complète.",
         "Votre numéro de téléphone."
    ];

     const infoData2 = [
        "veuillez suivre ces étapes : ",
        "📦 Prix total = Articles + Frais de livraison. ",
        "🗺️ Frais de livraison variables selon la zone.",
         "💳 Paiement intégral à la livraison."
    ];

    


    return(
        <section className='info_main'>
            <div className='info_content'>
                 <h3 className='info_title'>
            Comment passer une commande
          </h3>
            <ul className='info_list'>
                {infoData1.map((item, index) => (
                    <li key={index} className='info_item'>
                        {item}
                    </li>
                ))}
            </ul>
            </div>

             <div className='info_content'>
                 <h3 className='info_title'>
            Questions sur les tarifs et la livraison ?
          </h3>
            <ul className='info_list'>
                {infoData2.map((item, index) => (
                    <li key={index} className='info_item'>
                        {item}
                    </li>
                ))}
            </ul>
            </div>
        </section>
    )
}