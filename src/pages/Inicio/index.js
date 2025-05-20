import style from './Inicio.module.css';
import { useEffect, useState } from "react"
import Banner from "components/Banner"
import Titulo from "components/Titulo"
import Card from "components/Card"
import { getcinetag } from "api/db"


function Inicio() {
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        const fetchFilmes = async () => {
            try {
                const filmesDaAPI = await getcinetag();
                setFilmes(filmesDaAPI);
            } catch (error) {
                console.error('Erro ao buscar os filmes', error);
            }
        }
        fetchFilmes();
    }, [])

    return (
        <>
            <Banner imagem="home" />
            <Titulo><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titulo>
            <section className={style.container}>
                {filmes.map((filme) => {
                    return <Card {...filme} key={filme.id} />
                })}
            </section>
        </>
    )
}
export default Inicio