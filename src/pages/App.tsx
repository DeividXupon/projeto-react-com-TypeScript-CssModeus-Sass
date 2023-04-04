import React from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './app.module.scss';
import Cronometro from '../components/cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
