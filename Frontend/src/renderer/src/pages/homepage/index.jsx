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
          <Link to="/curriculo/cadastro"><button>Cadastrar Currículo</button></Link>
          <br />
          <Link to="/curriculo/anexo"><button>Anexar Currículo</button></Link>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <Link to="/cliente">Area do Cliente</Link>
        </center>
      </div>
    </>
  );
}

export default HomePage;