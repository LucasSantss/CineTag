import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "pages/Inicio"
import Favoritos from "pages/Favoritos";
import Cabecalho from "components/cabecalho/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/container";
import FavoritosProvider from "components/Contextos/Favoritos";
import Player from "components/Player";
import NaoEncontrada from "components/NaoEncontrada";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                        <Route path="/:id" element={<Player />} />
                        <Route path="*" element={<NaoEncontrada />} />
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}
export default AppRoutes;