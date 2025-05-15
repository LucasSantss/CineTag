import style from './Card.module.css';
import iconeFavoritar from './favoritar.png';
function Card({ id, titulo, capa }) {
    return (
        <div className={style.container}>
            <img src={capa} alt={titulo} className={style.capa} />
            <h2>{titulo}</h2>
            <img src={iconeFavoritar} alt='Favoritar filme' className={style.favoritar} />
        </div>

    )
}
export default Card;