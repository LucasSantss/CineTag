import { useFavoritoContext } from 'components/Contextos/Favoritos';
import style from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { getcinetag } from 'api/db';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    const { adicionarFavorito } = useFavoritoContext(getcinetag());

    const [ehFavorito, setEhFavorito] = useState(false);

    useEffect(() => {
        async function fetchFavorito() {
            const filmesDaAPI = await getcinetag();
            const isFavorito = filmesDaAPI.some(
                (filme) => filme.favoritos === true && filme.id === id
            );
            setEhFavorito(isFavorito);
        }

        fetchFavorito();
    }, [id]);

    const handleClick = async () => {
        // Inverte o estado de favorito
        const novoStatus = !ehFavorito;

        // Atualiza o banco de dados
        await adicionarFavorito({ id, favoritos: novoStatus });

        // Atualiza o estado local
        setEhFavorito(novoStatus);
    };

    const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;

    return (
        <div className={style.container}>
            <Link className={style.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={style.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img
                src={icone}
                alt="Favoritar filme"
                className={style.favoritar}
                onClick={handleClick}
            />
        </div>
    );
}
export default Card;