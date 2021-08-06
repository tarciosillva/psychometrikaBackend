const {
    ObjectId
} = require("bson");

const mongoConnect = require('../database/database')


class SerieController {
    async listarSerie(request, response) {
        try {
            const database = (await mongoConnect).db("psychometricaDB")
            database.collection("1serie").find({}).toArray(function (err, result) {
                if (err) throw err
                response.send(result)
            })
        } catch (error) {
            response.send(error)
        }
    }

    async listarConteudos(request, response) {
        const titulo_capitulo = request.params.titulo_capitulo
        try {
            const database = (await mongoConnect).db("psychometricaDB")
            database.collection("1serie_HTML").find({

            }).toArray(function (err, result) {
                if (err) throw err
                result[0].matematica.map((element, index) => {
                    if (element.capitulo === titulo_capitulo) {
                        response.send(element.conteudo)
                    }
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    async novoTituloMateria(request, response) {
        var materia = request.body.materia
        try {
            const database = (await mongoConnect).db("psychometricaDB")
            if (materia !== "") {
                database.collection("1serie").updateOne({
                    _id: ObjectId('610c3fec3334a8cd1db522bf')
                }, {
                    $set: {
                        materia: `${materia}`
                    }
                }, function (err, result) {
                    if (err) throw err
                    response.send(result)
                })
            } else return
        } catch (error) {
            console.log(error)
        }
    }


    async novaOrdemMateria(request, response) {
        var novaOrdem = request.body.capitulos
        try {
            const database = (await mongoConnect).db("psychometricaDB")
            database.collection("1serie").updateOne({
                _id: ObjectId('610c3fec3334a8cd1db522bf')
            }, {
                $set: {
                    "capitulos": novaOrdem
                }
            }, function (err, result) {
                if (err) throw err
                response.send(result)
            })


        } catch (error) {
            console.log(error)
        }
    }

    async listarCapitulosAlunos(request, response){
        try {
            const database = (await mongoConnect).db("psychometricaDB")
            database.collection("capitlulos_alunos_1serie").find({}).toArray(function(err, result){
                if(err) throw err
                response.send(result)
            })
        } catch (error) {
            console.log(error)
        }
    }

    async alterarExibiçãoCapitulosAlunos(request, response){
        var capitulos = request.body.capitulos
        try {
            const database = (await mongoConnect).db("psychometricaDB")
            database.collection("capitlulos_alunos_1serie").updateOne({
                _id: ObjectId('610d7b9b1216cb1c14504866')
            }, {
                $set: {
                    "capitulos": capitulos
                }
            }, function (err, result) {
                if (err) throw err
                response.send(result)
            })


        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new SerieController