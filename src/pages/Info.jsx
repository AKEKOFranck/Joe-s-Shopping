import '../styles/Info.css';

export default function Info() {


const numbers = [
        "Pour plus d'info sur nos produits",
        "contactez le : +225 01-03-34-62-30",
        "Disponible 20/24H - 6/7j",
];



    return(
        <section className='info_main'>
            <ul className='info_list'>
                {numbers.map((item,idx) =>(
                    <li className='info_list2' key={idx}>{item}</li>
                ))}
            </ul>
        </section>
    )
}