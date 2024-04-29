const alimentosModel = require("../models/alimentoModel");
const model = new alimentosModel();

module.exports = function(app){
    app.get("/alimentos/getAlimentos", async function(req, res){
        try {
            let alimentos = await model.getAlimentos();
            res.send(alimentos);
        } catch (error) {
            console.log(error);
            res.send({message:"Hubo un error al obtener los datos de los alimentos"});            
        }
    });
    
    app.post("/alimentos/addAlimento", async function(req, res){
        try {
            const nuevoAlimento = {
                nombre: req.body.nombre,
                calorias: req.body.calorias,
                grasas: req.body.grasas,
                carbohidratos: req.body.carbohidratos,
                proteinas: req.body.proteinas
            };

            await model.postAlimento(nuevoAlimento);

            console.log(nuevoAlimento);
            res.send({message:"Alimento guardado con exito"});
            
        } catch (error) {
            console.log(error);
            res.send({message:"Hubo un error al agregar el alimento"});
        }
    });
}