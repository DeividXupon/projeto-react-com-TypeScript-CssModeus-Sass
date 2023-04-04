import style from './Lista.module.scss';
import Item from './item';

const Lista = () => {
    const itens = [
        {
            tarefa: "JavaScript",
            tempo: "00:35:00"
        },
        {
            tarefa: "TypeScript",
            tempo: "01:00:00"
        }
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2>Lista a estudar</h2>
            <ul>
                {itens.map((item, index) => (
                    <Item key={index} tarefa={item.tarefa} tempo={item.tempo} />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;