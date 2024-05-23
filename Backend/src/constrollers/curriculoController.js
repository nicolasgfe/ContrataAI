const Curriculo = require("../models/curriculoModel");
const multer = require("multer");
const upload = multer({dest: "upload/"});


module.exports = {
    async all(request, response){
        try {
            const curriculos = await Curriculo.findAll();
            response.status(200).json(curriculos);
        } catch (error) {
            response.status(400).send(error);
        }
    },
    async one(request, response) {
        try {
            const id = request.params.id;
            const curriculo = await Curriculo.findOne({where:{id}});

            if (!curriculo) {  
                response.status(400).send("Currículo não encontrado!");
            }
            
            response.status(200).json(curriculo);
        } catch (error){
            response.status(400).send(error);
        }
    },
    async create(request, response) {
        try {
            request.body.curriculo
            await Curriculo.create(request.body);
             response.status(200).json("Curriculo cadastrado!");
        } catch {
            response.status(400).send(error);
        }
    },
    async createAnexo(request, response) {
        try {

            const { nome, email, telefone } = request.body;

            const file = request.file;

            const curriculo = new Curriculo({
                nome,
                email,
                telefone,
                curriculo: file.filename,
            });

            await curriculo.save();

             response.status(200).json("Curriculo Anexado!");
        } catch {
            response.status(400).send(error);
        }
    }, 
    async update(request, response) {
        try {
            const { nome, 
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
                    descricaoProfissional } = request.body;
            const id = request.params.id;

            const curriculo = await Curriculo.findOne({where:{id}});

            if (!curriculo) {  
                response.status(400).send("Currículo não encontrado!");
            }

            curriculo.nome = nome;
            curriculo.email = email;
            curriculo.telefone = telefone;
            curriculo.dataNascimento = dataNascimento;
            curriculo.cidade = cidade;
            curriculo.uf = uf;
            curriculo.estadoCivil = estadoCivil;
            curriculo.genero = genero;
            curriculo.grauEscolaridade = grauEscolaridade;
            curriculo.nacionalidade = nacionalidade;
            curriculo.descricaoPessoal = descricaoPessoal;
            curriculo.descricaoProfissional = descricaoProfissional;

            await curriculo.save();
            response.status(200).send("Cadastro de currículo atualizado!");

        } catch {
            response.status(400).send(error);
        }
    },
    async delete(request, response) {
        try {
            const id = request.params.id;
            const curriculo = await Curriculo.destroy({where: {id} });

            if (!curriculo) {
                response.status(400).send("Currículo não encontrado!");
            }
            
            response.status(200).send("Cadastro de currículo excluído!");
        } catch (error) {
            response.status(400).send(error);
        }
    } 
};