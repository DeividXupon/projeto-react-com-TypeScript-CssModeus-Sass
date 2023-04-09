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

  function finalizaTarefa() {
    if (selecionado) {
      setItens(itensAnteriores => itensAnteriores.map(item => 
        {
          if(item.id === selecionado.id){
            return {
              ...item,
              selecionado: false,
              completado: true
            }
          }
          return item
        }))
      setSelecionado(undefined);
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setItens={setItens} />
      <Lista tarefas={itens} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizaTarefa={finalizaTarefa} />
    </div>
  );
}

export default App;
