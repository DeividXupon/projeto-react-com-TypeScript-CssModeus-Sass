import React from 'react';
import style from './Lista.module.scss';

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
                {itens.map((item, index) =>
                (<li className={style.item} key={index}>
                    <h3>{item.tarefa}</h3>
                    <span>{item.tempo}</span>
                </li>))}
            </ul>
        </aside>
    )
}

export default Lista;