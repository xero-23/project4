import Title from '../elements/Title'

const Inicio = () => {
    return (
        <div className="container_principal">
            <div className='row'>
                <div className='col'>
                    <Title text={"Inicio"} />
                    <p>Radiohead es una banda británica de rock alternativo originaria de Abingdon-on-Thames, Inglaterra,
                        formada en 1985 inicialmente como una banda de versiones.</p>
                    <p>Radiohead lanzó su primer sencillo, «Creep», en 1992. Si bien la canción fue en un comienzo un fracaso comercial,
                        se convirtió en un éxito mundial tras el lanzamiento de su álbum debut, Pablo Honey (1993) debido al auge comercial
                        del rock alternativo. La popularidad de Radiohead en el Reino Unido aumentó con su segundo álbum, The Bends (1995).
                        El tercero, OK Computer (1997), con un sonido expansivo y temáticas como la alienación y la globalización, les dio
                        fama mundial y ha sido aclamado como un disco histórico de la década de 1990 y uno de los mejores álbumes de todos
                        los tiempos.</p>
                </div>
                <div className='col'>
                    <img src="https://images.ecestaticos.com/oc-xCkAJKc3METgwdWGkC0lWCHM=/0x0:1599x1165/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ff18%2F79e%2Fb6b%2Ff1879eb6b24682a862d57413d6b7c283.jpg" alt="Radiohead" width={550} height={420} />
                </div>
            </div>
        </div>
    )
}

export default Inicio