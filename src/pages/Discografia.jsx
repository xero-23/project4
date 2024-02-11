import Title from '../elements/Title'

const Discografia = () => {
    return (
        <div className="container_principal">
            <div className='row'>
                <div className='col'>
                    <Title text={"Discografía"} />
                    <ul>
                        <li>1993: Pablo Honey</li>
                        <li>1995: The Bends</li>
                        <li>1997: OK Computer</li>
                        <li>2000: Kid A</li>
                        <li>2001: Amnesiac</li>
                        <li>2003: Hail to the Thief</li>
                        <li>2007: In Rainbows</li>
                        <li>2011: The King of Limbs</li>
                        <li>2016: A Moon Shaped Pool</li>
                    </ul>
                </div>
                <div className='col'>
                    <div className='last_picture'>
                        <img src="https://lacarnemagazine.com/wp-content/uploads/2022/10/radiohead-destacada.jpg" alt="Radiohead" width={550} height={305} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discografia