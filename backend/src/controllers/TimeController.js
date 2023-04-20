const Time = require("../models/TimeModel");

module.exports = {
    async read(req, res){
        const timeList = await Time.find();
        return res.json(timeList);
    },

    async create(req, res){
        const {nome, idade, time} = req.body;

        if(!nome || !time || !idade){
            return res.status(400).json({error: "Time, nome e idade devem ser preenchidos."});
        }

        const TimeCriada = await Time.create({
            nome,
            idade,
            time
        });

        return res.json(TimeCriada);
    },

    async delete(req, res){
        const {id} = await req.params;
        const timeDeletado = await Time.findOneAndDelete({_id:id});

        if(timeDeletado){
            return res.json(timeDeletado);
        }

        return res.status(401).json({error: "Registro não encontrado."});
    },

    async update(req, res){
        const {id} = await req.params;
        const {nome, idade, time} = req.body;
        const timeAux = await Time.findOne({_id:id});

        if(!timeAux){
            return res.status(401).json({error: "Registro não encontrado."});
        }

        if(!nome || !time || !idade){
            return res.status(400).json({error: "Time, nome e idade devem ser preenchidos."});
        }

        timeAux.nome = nome;
        timeAux.idade = idade;
        timeAux.time = time;

        await timeAux.save();

        return res.json(timeAux);
    },

    async busca(req, res){
        const {id} = await req.params;
        const timeAux = await Time.findOne({_id:id});

        if(!timeAux){
            return res.status(401).json({erros: "Registro não encontrado."});
        }

        return res.json(timeAux);
    }
};