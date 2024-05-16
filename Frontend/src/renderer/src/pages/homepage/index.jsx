import React from 'react';
import '../homepage/index.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h1 id='titulo'>Seja Bem-Vindo!</h1>
      <p id='subtitulo'>Escolha a opção para nos enviar suas informações</p>
      <br /><br /><br /><br />
      <div className="home-page">
        <center>
          <Link to="/cadastro/curriculo"><button>Cadastrar Currículo</button></Link>
          <br />
          <button>Anexar Currículo</button>
        </center>
      </div>
    </>
  );
}

export default HomePage