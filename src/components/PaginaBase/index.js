import Cabecalho from "components/cabecalho/Cabecalho";
import Container from "components/container";
import FavoritosProvider from "components/Contextos/Favoritos";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}
export default PaginaBase;