import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Link } from 'react-router-dom';
import '../concluido/index.css';

const Concluido = () => (
  <>
    <br /><br /><br />
    <Flex justify="center" align="center">
        <CheckCircleOutlined style={{ fontSize: '150px'}} />
    </Flex>
    <br />
    <h1 id="titulo">
            Tudo pronto! 
    </h1>
    <p id="subtitulo">
      Agora é só aguardar o contato da nossa equipe
    </p>
    
    <br />

    <center><Link to="/"><button>Voltar ao Menu</button></Link></center>
        

       
    
  </>
);
export default Concluido;