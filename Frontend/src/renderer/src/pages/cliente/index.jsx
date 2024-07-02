import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../cliente/index.css';

import axios from "axios";

const api = axios.create({
  baseURL: "https://contrataai.onrender.com/api",
  withCredentials: true,
});


const AreadoCliente = () => {
  const [number, setNumber] = useState(0)
  const [isLoading, setLoading] = useState(true)
  const [ data, setData ] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/curriculos");
        setNumber(response.data.length);
        setData(response.data[0]);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
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
    {(!isLoading) ? (data?.nome - number) : ("carregando..." + {number})}
  </>
  );
}
export default AreadoCliente;