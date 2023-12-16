import './style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' /* Importamos estos elementos para poder trabajar con links. */
import Header from './pages/Header'
import Inicio from './pages/Inicio'
import Footer from './pages/Footer'
import Miembros from './pages/Miembros'
import Discografia from './pages/Discografia'
import Error404 from './pages/Error404'

function App() {
    return (
        <>
            <BrowserRouter>
                <Header /> {/* El Header es fijo. */}
                <Routes>
                    <Route path="/" element={<Inicio />} /> {/* Estos 4 componentes son dinámicos, por eso están dentro de "Routes". */}
                    <Route path="/miembros" element={<Miembros />} />
                    <Route path="/discografia" element={<Discografia />} />
                    <Route path="/*" element={<Error404 />} />
                </Routes>
                <Footer /> {/* El Footer es fijo. */}
            </BrowserRouter>
        </>
    )
}

export default App