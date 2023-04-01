import React from 'react';

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
        <aside>
            <h2>Lista a estudar</h2>
            <ul>
                {itens.map((item, index) =>
                (<li key={index}>
                    <h3>{item.tarefa}</h3>
                    <span>{item.tempo}</span>
                </li>))}
            </ul>
        </aside>
    )
}

export default Lista;