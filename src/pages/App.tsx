import React from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './app.module.scss';
import Cronometro from '../components/cronometro';
import { Itarefa } from '../types/iTarefas';

function App() {

  const [itens, setItens] = React.useState<Itarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setItens={setItens}/>
      <Lista tarefas={itens}/>
      <Cronometro />
    </div>
  );
}

export default App;
