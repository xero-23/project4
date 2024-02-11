const Footer = () => {

    const añoActual = new Date().getFullYear();

    return (
        <div className="container_footer">
            <div className="row">
                <p>Iván Soliz Meyer | Copyright © {añoActual}</p>
            </div>
        </div>
    )
}

export default Footer