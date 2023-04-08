import React from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './app.module.scss';
import Cronometro from '../components/cronometro';
import { Itarefa } from '../types/iTarefas';

function App() {

  const [itens, setItens] = React.useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = React.useState<Itarefa>()

  function selecionaTarefa(itemSelecionado: Itarefa) {
    setSelecionado(itemSelecionado);
    setItens(itensAnteriores => itensAnteriores.map(item =>
    ({
      ...item, 
      selecionado: item.id === itemSelecionado.id ? true : false
    }) ))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setItens={setItens} />
      <Lista tarefas={itens} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
