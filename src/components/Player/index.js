import styles from './Player.module.css';
import { getcinetag } from "api/db";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Player() {
    const parametros = useParams();
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        async function fetchFilmes() {
            const filmesDaAPI = await getcinetag();
            setFilmes(filmesDaAPI.find((filme) => filme.id === Number(parametros.id)));
        }
        fetchFilmes();
    }, []);

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>

            </Titulo>
            <section >
                <h1>{filmes.titulo}</h1>
                <iframe
                    width="100%"
                    height="100%"
                    src={filmes.link}
                    title={filmes.titulo}
                    frameborder="0" allowfullscreen>
                </iframe>
            </section>
        </>
    )
}
export default Player;