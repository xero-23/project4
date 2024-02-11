import Title from '../elements/Title'

const Miembros = () => {
    return (
        <div className="container_principal">
            <div className='row'>
                <div className='col'>
                    <Title text={"Miembros"} />
                    <ul>
                        <li>Thom Yorke: voz principal, guitarra rítmica, piano, teclados, ordenador portátil, pandereta y batería</li>
                        <li>Jonny Greenwood: guitarra solista, teclados, sintetizador, ondas Martenot, piano, glockenspiel, ordenador portátil, sintetizador analógico, piano de juguete, percusión y piano Rhodes</li>
                        <li>Ed O'Brien: guitarra, percusión, sampler, piano y voz</li>
                        <li>Colin Greenwood: bajo, teclados, sintetizador, sampler, contrabajo y percusión</li>
                        <li>Phil Selway: batería, percusión y voz</li>
                    </ul>
                </div>
                <div className='col'>
                    <img src="https://prensarock.com/wp-content/uploads/2021/10/RADIOHEAD_PORTRAIT.No6_.2020.jpg" alt="Radiohead" width={550} height={420} />
                </div>
            </div>
        </div>
    )
}

export default Miembros