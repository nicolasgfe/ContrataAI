import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import { Button, ConfigProvider, message } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const URL = "https://contrataai.onrender.com";

function AnexaCurriculo() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [file, setArquivo] = useState(null);

    const [enviando, setEnviando] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('telefone', telefone);
        formData.append('file', file);

        setEnviando(true);

        function fetchWithTimeout(url, timeout) {
            const controller = new AbortController();
            const signal = controller.signal;

            const timeoutId = setTimeout(() => controller.abort(), timeout);

            return fetch(url, { 
                signal,
                method: "POST",
                body: formData 
            })
                .then(response => {
                    clearTimeout(timeoutId);
                    if (!response.ok) {
                        throw new Error('Erro HTTP, status ' + response.status);
                    }
                    return response.json();
                })
                .catch(error => {
                    if (error.name === 'AbortError') {
                        throw new Error('Timeout');
                    } else {
                        throw error;
                    }
                });
        }

        await fetchWithTimeout(URL + "/api/curriculos/anexo", 7000)
            .then(data => navigate('/curriculo/concluido'))
            .catch(error => {
                message.error("CA-01 - Falha ao enviar currículo. Por favor tente novamente mais tarde.", [10]);
            })
            .finally(() => {
                setEnviando(false);
            });
    }

    const formataTelefone = () => {
        const temp = telefone;

        if (temp.length != 11) {
            message.warning("Número inserido é inválido!");
        } else {
            const formatado = temp.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            setTelefone(formatado);
        }
    };

    return (
        <div>

            <h1 id='titulo'>Anexar Currículo</h1>
            <p id='subtitulo'>Preencha suas informações e anexe seu currículo em formato PDF</p>
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
                            type='text'
                            id='telefone'
                            name='telefone'
                            maxLength={11}
                            placeholder='(  )_____-____'
                            required
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            onBlur={formataTelefone}
                        />

                        <br />
                        <label htmlFor='curriculo'>Currículo</label>
                        <br />
                        <input
                            type='file'
                            id='file'
                            name='file'
                            accept='.pdf'
                            required
                            onChange={(e) => setArquivo(e.target.files[0])}
                        />
                        <br />
                        <p id='dica'>Somente arquivo .PDF</p>
                    </div>

                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    defaultBg: "#800080",
                                    defaultColor: "#ffffff",
                                    defaultHoverBg: "#800080",
                                    defaultHoverBorderColor: "#800080",
                                    defaultHoverColor: "#ffffff",
                                    fontWeight: 600
                                },
                            },
                        }}
                    >

                        <Button
                            htmlType='submit'
                            type="default"
                            size="large"
                            icon={<CheckOutlined />}
                            style={{ width: '150px' }}
                            loading={enviando}
                        >
                            Cadastrar
                        </Button>

                    </ConfigProvider>
                    <br /><br /><br /><br /><br />

                </fieldset>
            </form>

        </div>

    );

}

export default AnexaCurriculo;