import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "pages/Inicio"
import Favoritos from "pages/Favoritos";
import Player from "components/Player";
import NaoEncontrada from "components/NaoEncontrada";
import PaginaBase from "components/PaginaBase";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;