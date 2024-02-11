import { Link } from 'react-router-dom' /* Importamos este elemento para poder trabajar con links. Los "a href" se reemplazan por "Link to". */
/* Para links externos a React usar un "a href", pero para internos usar "Link to". */

const Header = () => {
    return (
        <div className="container_header">
            <div className="row">
                <div className="col">
                    <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Radiohead_Logo.jpg" alt="Radiohead" width={180} height={37} /></Link>
                </div>
                <div className="col">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/miembros" className="nav-link">Miembros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/discografia" className="nav-link">Discografía</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header