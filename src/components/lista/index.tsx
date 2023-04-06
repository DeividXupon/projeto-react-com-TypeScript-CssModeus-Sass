import { Itarefa } from '../../types/iTarefas';
import style from './Lista.module.scss';
import Item from './item';

interface props {
    tarefas: Itarefa[],
    selecionaTarefa: (itemSelecionado: Itarefa) => void
}

export default function Lista({ tarefas, selecionaTarefa }: props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Lista a estudar</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        key={item.id}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        completado={item.completado}
                        selecionado={item.selecionado}
                        id={item.id}
                        selecionaTarefa={selecionaTarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

