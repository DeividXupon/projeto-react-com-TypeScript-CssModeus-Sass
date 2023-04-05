import React from 'react';
import { Itarefa } from '../../types/iTarefas';
import Botao from '../botao';
import style from './Formulario.module.scss';
import {v4 as uuidv4} from 'uuid';

class Formulario extends React.Component<{
    setItens: React.Dispatch<React.SetStateAction<Itarefa[]>>
}>

{
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setItens(itens => 
            [...itens, { ...this.state, selecionado:false, completado:false, id:uuidv4()}]);
        this.setState({tarefa: "", tempo: ""})
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Tarefa</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={event => this.setState({ ...this.state, tarefa: event.target.value })}
                        placeholder="O que quer estudar?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input
                        type="time"
                        step="1"
                        name='tempo'
                        id="tempo"
                        value={this.state.tempo}
                        onChange={event => this.setState({ ...this.state, tempo: event.target.value })}
                        min="00:01:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario;