import style from './Favoritos.module.css'
import { useEffect, useState } from "react"
import Banner from "components/Banner"
import Titulo from "components/Titulo"
import Card from 'components/Card';
import { getcinetag } from 'api/db';

function Favoritos() {
    const [favoritos, setFilmes] = useState([]);
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
            <Banner imagem="favoritos" />
            <Titulo><h1>meus filmes favoritos</h1></Titulo>
            <section className={style.container}>
                {favoritos.filter((fav) => fav.favoritos === true)
                    .map((fav) => {
                        return <Card {...fav} key={fav.id} />
                    })}
            </section>
        </>
    )
}
export default Favoritos