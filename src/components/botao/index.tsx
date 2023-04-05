import React from 'react';
import style from './Botao.module.scss'

type Props ={//coloquei o nome de Props mas poderia ser qualquer nome
    children: string,
    type?: "button" | "submit" | "reset" | undefined
  }

class Botao extends React.Component<Props> {
    render() {
        return (

            <button type={this.props.type} className={style.botao}>{this.props.children}</button>

        )
    }
}

export default Botao; 