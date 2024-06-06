import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Link } from 'react-router-dom';
import '../cliente/index.css';

const AreadoCliente = () => (
  <>
    <h1 id="titulo">
    Area do cliente</h1>
    <p id="subtitulo">
    Aqui você poderá ter acesso aos seus curriculos enviados
    </p>
    <br />
    <div className='voltar'>
                <Link to="/"><input type="button" value="Menu" /></Link>
    </div>
    <br />


    
  </>
);
export default AreadoCliente;