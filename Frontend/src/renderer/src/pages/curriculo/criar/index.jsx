import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, ConfigProvider, Tooltip, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import './index.css';

const URL = "https://contrataai.onrender.com";

function CriaCurriculo() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('');
    const [genero, setGenero] = useState('');
    const [grauEscolaridade, setGrauEscolaridade] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [descricaoPessoal, setDescricaoPessoal] = useState('');
    const [descricaoProfissional, setDescricaoProfissional] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            nome,
            email,
            telefone,
            dataNascimento,
            cidade,
            uf,
            estadoCivil,
            genero,
            grauEscolaridade,
            nacionalidade,
            descricaoPessoal,
            descricaoProfissional
        }

        await fetch(URL + "/api/curriculos/", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors"
        })

        navigate('/curriculo/concluido');
    }

    const buscaCep = async () => {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                const { localidade, uf, erro } = response.data;
                if (erro == 'true') {
                    message.warning('CEP inválido!');
                } else {
                    message.success('CEP válido!');
                    setCidade(localidade);
                    setUf(uf);
                }
            })
            .catch(error => {
                message.warning('CEP inválido!');
                console.log('Erro ao buscar CEP:', error);
                setCidade('');
                setUf('');

            });
    };

    const formataTelefone = () => {
        // Remove todos os caracteres não numéricos do telefone
        const temp = telefone;
    
        // Aplica a formatação desejada, por exemplo (XX) XXXX-XXXX
        const formatado = temp.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        
        setTelefone(formatado);
      };

    return (

        <div>

            <h1 id='titulo'>Cadastro de Currículo</h1>
            <p id='subtitulo'>Preencha suas informações</p>
            <br />

            <div className='voltar'>
                <Link to="/"><input type="button" value="Menu" /></Link>
            </div>

            <br />

            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <fieldset className='form'>

                    <div className='curriculo-insert'>
                        <label htmlFor='nome'>Nome Completo</label>
                        <br />
                        <input
                            type='text'
                            id='nome'
                            name='nome'
                            placeholder='Digite seu nome'
                            maxLength={100}
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <br />
                        <label htmlFor='email'>Email</label>
                        <br />
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Digite seu email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <label htmlFor='telefone'>Telefone</label>
                        <br />
                        <input
                            type='tel'
                            id='telefone'
                            name='telefone'
                            maxLength={11}
                            minLength={11}
                            placeholder='(  )_____-____'
                            required
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            onBlur={formataTelefone}
                        />
                        <br />
                        <label htmlFor='dataNascimento'>Data de Nascimento</label>
                        <br />
                        <input
                            type='date'
                            id='dataNascimento'
                            name='dataNascimento'
                            required
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                        />
                        <br />
                        <label id='labelCep' htmlFor='cep'>Cep</label>
                        <br />
                        <input
                            type='text'
                            id='cep'
                            name='cep'
                            required
                            placeholder='Digite o CEP'
                            maxLength='8'
                            minLength='8'
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                        />
                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        defaultBg: "#800080",
                                        defaultColor: "#ffffff",
                                        defaultHoverBorderColor: "#800080",
                                        defaultHoverColor: "#800000"
                                    },
                                },
                            }}
                        >
                            <Tooltip title="Buscar CEP">
                                <Button 
                                    type="default" 
                                    shape="circle" 
                                    autoInsertSpace="false" 
                                    icon={<SearchOutlined />} 
                                    onClick={buscaCep}
                                />
                            </Tooltip>
                        </ConfigProvider>
                    </div>
                    <div className='curriculo-insert'>
                        <label id='labelCidade' htmlFor='cidade'>Cidade</label>
                        <label htmlFor='uf'>UF</label>
                        <br />
                        <input
                            type='text'
                            id='cidade'
                            name='cidade'
                            placeholder='Digite sua cidade'
                            required
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        />
                        <input
                            type='text'
                            id='uf'
                            name='uf'
                            required
                            value={uf}
                            onChange={(e) => setUf(e.target.value)}
                        />
                        <br />
                        <label htmlFor='estadoCivil'>Estado Civil</label>
                        <br />
                        <select
                            id='estadoCivil'
                            name='estadoCivil'
                            required
                            value={estadoCivil}
                            onChange={(e) => setEstadoCivil(e.target.value)}
                        >
                            <option value="">Selecione</option>
                            <option value="Solteiro(a)">Solteiro(a)</option>
                            <option value="Casado(a)">Casado(a)</option>
                            <option value="Divorciado(a)">Divorciado(a)</option>
                            <option vlaue="Viúvo(a)">Viúvo(a)</option>
                        </select>
                        <br />
                        <label htmlFor='genero'>Gênero</label>
                        <br />
                        <select
                            id='genero'
                            name='genero'
                            required
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                        >
                            <option value="">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                        <br />
                        <label htmlFor='grauEscolaridade'>Grau de Escolaridade</label>
                        <br />
                        <select
                            id='grauEscolaridade'
                            name='grauEscolaridade'
                            required
                            value={grauEscolaridade}
                            onChange={(e) => setGrauEscolaridade(e.target.value)}
                        >
                            <option value="">Selecione</option>
                            <option value="Ensino Fundamental">Ensino Fundamental</option>
                            <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                            <option value="Ensino Médio">Ensino Médio</option>
                            <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                            <option value="Ensino Superior">Ensino Superior</option>
                        </select>
                    </div>
                    <div className='nacionalidade'>
                        <p>Nacionalidade</p>
                        <label>
                            <input
                                type="radio"
                                name="nacionalidade"
                                value="Brasileiro(a)"
                                checked={nacionalidade === "Brasileiro(a)"}
                                onChange={(e) => setNacionalidade(e.target.value)}
                            />
                            Brasileiro(a)
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="nacionalidade"
                                value="Estrangeiro(a)"
                                checked={nacionalidade === "Estrangeiro(a)"}
                                onChange={(e) => setNacionalidade(e.target.value)}
                            />
                            Estrangeiro(a)
                        </label>
                    </div>

                    <br />
                    <div className='curriculo-insert'>
                        <label>Descrição Pessoal</label>
                        <br />
                        <textarea
                            name="descricaoPessoal"
                            id="descricaoPessoal"
                            placeholder='Uma breve apresentação sua'
                            required
                            value={descricaoPessoal}
                            onChange={(e) => setDescricaoPessoal(e.target.value)}
                        />
                    </div>

                    <div className='curriculo-insert'>
                        <label>Descrição Profissional</label>
                        <br />
                        <textarea
                            name="descricaoProfissional"
                            id="descricaoProfissional"
                            placeholder='Experiências, habilidades...'
                            required
                            value={descricaoProfissional}
                            onChange={(e) => setDescricaoProfissional(e.target.value)}
                        />
                    </div>

                    <div className='submit'>
                        <input type='submit' value="Cadastrar"></input>
                    </div><br /><br /><br /><br /><br />

                </fieldset>

            </form>

        </div>
    );
}

export default CriaCurriculo;