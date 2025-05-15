import style from './Titulo.module.css';
function Titulo({ children }) {
    return (
        <div className={style.texto}>
            {children}
        </div>
    )
}
export default Titulo;