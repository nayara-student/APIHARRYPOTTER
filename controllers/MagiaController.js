const Magia = require('../models/Magia');

class MagiaController{
    //cria uma magia
    async store(req, res){
        const { magia, tipo, efeito } = req.body;
        try{
            const spell = await Magia.create({
                magia,
                tipo,
                efeito
            });
            return res.json(spell);
        }catch(err){
            return res.status(500).send({error: 'Não foi possível adicionar magia'});
        }
    }

    //busca todas as magias
    async index(req, res){
        try{
            const spell = await Magia.find({});
            res.json(spell);
        }catch(err){
            return res.status(500).send({error: 'Erro ao buscar magias'})
        }
    }
}

module.exports = new MagiaController();