import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import './index.css';

class AnexaCurriculo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curriculo: {
                nome: "",
                email: "",
                telefone: "",
                curriculo: "",
            },
            redirect: false
        }
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Navigate to="/" />;
        } else {
            return (

                <div>

                    <h1 id='titulo'>Anexar Currículo</h1>
                    <p id='subtitulo'>Preencha suas informações e anexe seu currículo em formato PDF</p>
                    <br /><br /><br />

                    <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
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
                                    value={this.state.curriculo.nome}
                                    onChange={this.handleInputChange}
                                />
                                <br />
                                <label htmlFor='email'>Email</label>
                                <br />
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='Digite seu email'
                                    value={this.state.curriculo.email}
                                    onChange={this.handleInputChange}
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
                                    value={this.state.curriculo.telefone}
                                    onChange={this.handleInputChange}
                                />
                                <br />
                                <label htmlFor='curriculo'>Currículo</label>
                                <br />
                                <input
                                    type='file'
                                    id='curriculo'
                                    name='curriculo'
                                    required
                                    value={this.state.curriculo.curriculo}
                                    onChange={this.handleInputChange}
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
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            curriculo: { ...prevState.curriculo, [name]: value }
        }));
    }

    handleSubmit = event => {
        fetch("http://localhost:3333/api/curriculos/anexo", {
            method: "post",
            body: JSON.stringify(this.state.curriculo),
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors"
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true })
                }
            })

        event.preventDefault();
    };
    
}

export default AnexaCurriculo;