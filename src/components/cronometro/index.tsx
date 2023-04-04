import Botao from "../botao";
import Timer from "./timer";
import style from "./Cronometro.module.scss";

export default function Cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha uma tarefa e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Timer />
            </div>
            <Botao> Iniciar </Botao>
        </div>
    )
}