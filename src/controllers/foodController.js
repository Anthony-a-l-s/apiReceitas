const Food = require("../database/models/food");
const Ingreient = require("../database/models/ingredient");
const Instruction = require("../database/models/instruction");

module.exports = {

    async all(req, res, next) {
        Food.findAll({include: [Ingreient, Instruction]}).then((result) => {
            res.status(201).json(result)
        }).catch(next)

    },
    async create(req, res, next) {
        const { name, time, cover, video, name_ingredient, amount, text } = req.body
        try {
            Food.create({
                name: name,
                time: time,
                cover: cover,
                video: video
            }).then((result)=>{
                Ingreient.create({
                    name_ingredient: name_ingredient,
                    amount: amount,
                    idFood: result.id
                })
                Instruction.create({
                    text: text,
                    idFood: result.id
                })
                res.status(201).json('Cadastro feito com sucesso')
            })
            
        } catch (error) {
            console.log(error)
            next;
        }
    }
}