import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function AnexaCurriculo() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [file, setArquivo] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('telefone', telefone);
        formData.append('file', file);


        await fetch("http://localhost:3333/api/curriculos/anexo", {
            method: "POST",
            body: formData
        })
           
        navigate('/');
    }

    return (
        <div>
            <h1 id='titulo'>Anexar Currículo</h1>
            <p id='subtitulo'>Preencha suas informações e anexe seu currículo em formato PDF</p>
            <br /><br /><br />

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

                    </div>

                    <div className='submit'>
                        <input type='submit' value="Cadastrar"></input>
                    </div><br /><br /><br /><br /><br />

                    <script>

                    </script>
                </fieldset>
            </form>

        </div>

    );

}

export default AnexaCurriculo;