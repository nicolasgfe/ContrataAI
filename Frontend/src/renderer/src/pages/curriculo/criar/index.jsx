import React, { Component } from 'react';
import { Navigate, Link } from 'react-router-dom';
import './index.css';

class CriaCurriculo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curriculo: {
                nome: "",
                email: "",
                telefone: "",
                dataNascimento: "",
                cidade: "",
                uf: "",
                estadoCivil: "",
                genero: "",
                grauEscolaridade: "",
                nacionalidade: "",
                descricaoPessoal: "",
                descricaoProfissional: ""

            },
            redirect: false
        }
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Navigate to="/curriculo/concluido" />;
        } else {
            return (

                <div>

                    <h1 id='titulo'>Cadastro de Currículo</h1>
                    <p id='subtitulo'>Preencha suas informações</p>
                    <br />
                    
                    <div className='voltar'>
                        <Link to="/"><input type="button" value="Menu" /></Link>
                    </div>
                    
                    <br />

                    <form onSubmit={this.handleSubmit}>
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
                                    minLength={11}
                                    placeholder='(  )_____-____'
                                    required
                                    value={this.state.curriculo.telefone}
                                    onChange={this.handleInputChange}
                                />
                                <br />
                                <label htmlFor='dataNascimento'>Data de Nascimento</label>
                                <br />
                                <input
                                    type='date'
                                    id='dataNascimento'
                                    name='dataNascimento'
                                    required
                                    value={this.state.curriculo.dataNascimento}
                                    onChange={this.handleInputChange}
                                />
                                 <br />
                                <label id='labelCidade'htmlFor='cidade'>Cidade</label>
                                <label htmlFor='uf'>UF</label>
                                <br />
                                <input
                                    type='text'
                                    id='cidade'
                                    name='cidade'
                                    placeholder='Digite sua cidade'
                                    required
                                    value={this.state.curriculo.cidade}
                                    onChange={this.handleInputChange}
                                />
                                <input 
                                    type='text'
                                    id='uf'
                                    name='uf'
                                    required
                                    value={this.state.curriculo.uf}
                                    onChange={this.handleInputChange} 
                                />
                                <br />
                                <label htmlFor='estadoCivil'>Estado Civil</label>
                                <br />
                                <select
                                    id='estadoCivil'
                                    name='estadoCivil'
                                    required
                                    value={this.state.curriculo.estadoCivil}
                                    onChange={this.handleInputChange}
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
                                    value={this.state.curriculo.genero}
                                    onChange={this.handleInputChange}
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
                                    value={this.state.curriculo.grauEscolaridade}
                                    onChange={this.handleInputChange}
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
                                        checked={this.state.curriculo.nacionalidade === "Brasileiro(a)"}
                                        onChange={this.handleInputChange}
                                    />
                                    Brasileiro(a)
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="radio"
                                        name="nacionalidade"
                                        value="Estrangeiro(a)"
                                        checked={this.state.curriculo.nacionalidade === "Estrangeiro(a)"}
                                        onChange={this.handleInputChange}
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
                                    value={this.state.curriculo.descricaoPessoal}
                                    onChange={this.handleInputChange}
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
                                    value={this.state.curriculo.descricaoProfissional}
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
        fetch("http://localhost:3333/api/curriculos", {
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

export default CriaCurriculo;