import Botao from "../botao";
import Timer from "./timer";
import style from "./Cronometro.module.scss";
import { converteTempoEmSegundos } from "../../common/util/time"
import { Itarefa } from "../../types/iTarefas";
import { useEffect, useState } from "react";

interface Props {
    selecionado: Itarefa | undefined
    finalizaTarefa: () => void
}

export default function Cronometro({ selecionado, finalizaTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(converteTempoEmSegundos(selecionado.tempo));
        }
    }, [selecionado]);

    function regresiva(segundos: number = 0) {


        setTimeout(() => {
            if (segundos > 0) {
                setTempo(segundos - 1);
                return regresiva(segundos - 1);
            }
            finalizaTarefa();
        }, 1000)

    }


    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha uma tarefa e inicie o cronometro</p>
            <p>Tempo: {tempo} Segundos</p>
            <div className={style.relogioWrapper}>
                <Timer tempo={tempo} />
            </div>
            <div>
                <Botao onClick={() => regresiva(tempo)} > Iniciar </Botao>
            </div>
        </div>
    )
}