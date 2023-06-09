import React from 'react';
import style from './Botao.module.scss'

type Props = {
    children: string,
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

class Botao extends React.Component<Props> {
    render() {
        return (

            <button onClick={this.props.onClick} type={this.props.type} className={style.botao}>{this.props.children}</button>

        )
    }
}

export default Botao; 