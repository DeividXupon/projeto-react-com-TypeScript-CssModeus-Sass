import { Itarefa } from '../../types/iTarefas';
import style from './Lista.module.scss';
import Item from './item';

export default function Lista({ tarefas }: { tarefas: Itarefa[] }) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Lista a estudar</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        completado={item.completado}
                        selecionado={item.selecionado}
                        id={item.id}
                    />
                ))}
            </ul>
        </aside>
    )
}

