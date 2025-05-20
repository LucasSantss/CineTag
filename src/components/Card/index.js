import { useFavoritoContext } from 'components/Contextos/Favoritos';
import style from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { getcinetag } from 'api/db';
import { useEffect, useState } from 'react';

function Card({ id, titulo, capa }) {

    const { adicionarFavorito } = useFavoritoContext(getcinetag());

    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        async function fetchFilmes() {
            const filmesDaAPI = await getcinetag();
            setFilmes(filmesDaAPI.some((filme) => filme.favoritos === true && filme.id === id));
        }
        fetchFilmes();
    }, []);

    const icone = filmes ? iconeDesfavoritar : iconeFavoritar;

    return (
        <div className={style.container}>
            <img src={capa} alt={titulo} className={style.capa} />
            <h2>{titulo}</h2>
            <img src={icone} alt='Favoritar filme' className={style.favoritar} onClick={() => { adicionarFavorito({ id, favoritos: !filmes }) }} />
        </div>
    )
}
export default Card;