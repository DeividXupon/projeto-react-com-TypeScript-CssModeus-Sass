import Botao from "../botao";
import Timer from "./timer";
import style from "./Cronometro.module.scss";
import { converteTempoEmSegundos } from "../../common/util/time"
import { Itarefa } from "../../types/iTarefas";
import { useEffect, useState } from "react";

interface Props {
    selecionado: Itarefa | undefined
}

export default function Cronometro({selecionado} : Props){
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if( selecionado?.tempo ){
            setTempo(converteTempoEmSegundos(selecionado.tempo));
        }
    },[selecionado]);
    
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha uma tarefa e inicie o cronometro</p>
            <p>Tempo: {tempo} Segundos</p>
            <div className={style.relogioWrapper}>
                <Timer tempo={tempo} />
            </div>
            <Botao> Iniciar </Botao>
        </div>
    )
}