import { Itarefa } from "../../../types/iTarefas"
import style from "../Lista.module.scss"

interface props extends Itarefa {
    selecionaTarefa: (itemSelecionado: Itarefa) => void
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: props) {
    return (
        <li className={`${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompleto : ''} ${style.item}`}
            onClick={() => !completado && selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}