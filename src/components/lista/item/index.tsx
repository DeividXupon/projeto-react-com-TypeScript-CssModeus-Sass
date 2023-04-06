import { Itarefa } from "../../../types/iTarefas"
import style from "../Lista.module.scss"

interface props extends Itarefa {
    selecionaTarefa: (itemSelecionado: Itarefa) => void
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: props) {
    return (
        <li className={`${selecionado ? style.itemSelecionado : ''} ${style.item}`} onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}