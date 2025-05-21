import { useFavoritoContext } from 'components/Contextos/Favoritos';
import style from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { getcinetag } from 'api/db';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link className={style.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={style.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone} alt='Favoritar filme' className={style.favoritar} onClick={() => { adicionarFavorito({ id, favoritos: !filmes }) }} />
        </div>
    )
}
export default Card;