const userModel = require("../models/userModel");
const model = new userModel();
const fs = require("fs");
const path = require("path");
// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = function(appUser){
    appUser.get("/user/getUsers", async function(req, res){
        try {
            let users = await model.getUsers();
            res.send(users);
        } catch (error) {
            console.log(error);
            res.send({message:"Hubo un error al obtener los datos de los usuarios"});            
        }
    });
    
    appUser.post("/user/addUser", async function(req,res){
        try {
            let fotoPerfilPath = null;
            if(req.files.length > 0){
                const fotoPerfil = req.files[0].filename;
                fotoPerfilPath = path.join(__dirname, "../views/uploads", fotoPerfil);
                fs.renameSync(req.files[0].path, fotoPerfilPath);
            }

            const nuevoUser = {
                nombre: req.body.nombreUser,
                apellidos: req.body.apellidosUser,
                nombreUsuario: req.body.userName,
                email: req.body.emailUser,
                password: req.body.passwordUser,
                foto: fotoPerfilPath ? fotoPerfilPath : req.body.fotoPerfil,
                genero: req.body.generoUser,
                altura: req.body.alturaUser,
                numeroTelefono: req.body.numeroTelefonoUser,
                nivelActividadFisica: req.body.nivelActividadFisicaUser,
                fechaCreacion: new Date(),
                fechaNacimiento: req.body.fechaNacimientoUser,
                datosNutricion: req.body.datosNutricionUser ? req.body.datosNutricionUser.map((peso, index) => {
                    return{
                        peso,
                        cintura: req.body.cinturaUser[index],
                        cadera: req.body.caderaUser[index],
                        pecho: req.body.pechoUser[index],
                        abdomen: req.body.abdomenUser[index],
                        bicep: req.body.bicepUser[index],
                        muslo: req.body.musloUser[index],
                        pantorrilla: req.body.pantorrillaUser[index],
                        pesoObjetivo: req.body.pesoObjetivoUser[index],
                        fechaMedicion: req.body.fechaMedicionUser[index],
                    }
                }) : [],
                alergiasAlimentarias: req.body.alergiasAlimentariasUser ? req.body.alergiasAlimentariasUser.map((alergia, index) => {
                    return{
                        alergia,
                    }
                }) : []
            }; 

            await model.postUsers(nuevoUser);
            res.send({message:"User guardado con exito"});
            
        } catch (error) {
            console.log(error);
            res.send({message:"Hubo un error al agregar el User"});
        }
    });

    appUser.post("/user/updateUser", async function(req,res){
        try {
            let fotoPerfilPath = null;
            if(req.files.length > 0){
                const fotoPerfil = req.files[0].filename;
                fotoPerfilPath = path.join(__dirname, "../views/uploads", fotoPerfil);
                fs.renameSync(req.files[0].path, fotoPerfilPath);
            }

            const userId = { _id: req.body._id };
            const nuevoUser = {
                nombre: req.body.nombreUser,
                apellidos: req.body.apellidosUser,
                nombreUsuario: req.body.userName,
                email: req.body.emailUser,
                password: req.body.passwordUser,
                foto: fotoPerfilPath ? fotoPerfilPath : req.body.fotoPerfil,
                genero: req.body.generoUser,
                altura: req.body.alturaUser,
                numeroTelefono: req.body.numeroTelefonoUser,
                nivelActividadFisica: req.body.nivelActividadFisicaUser,
                fechaCreacion: new Date(),
                fechaNacimiento: req.body.fechaNacimientoUser,
                datosNutricion: req.body.datosNutricionUser ? req.body.datosNutricionUser.map((peso, index) => {
                    return{
                        peso,
                        cintura: req.body.cinturaUser[index],
                        cadera: req.body.caderaUser[index],
                        pecho: req.body.pechoUser[index],
                        abdomen: req.body.abdomenUser[index],
                        bicep: req.body.bicepUser[index],
                        muslo: req.body.musloUser[index],
                        pantorrilla: req.body.pantorrillaUser[index],
                        pesoObjetivo: req.body.pesoObjetivoUser[index],
                        fechaMedicion: req.body.fechaMedicionUser[index],
                    }
                }) : [],
                alergiasAlimentarias: req.body.alergiasAlimentariasUser ? req.body.alergiasAlimentariasUser.map((alergia, index) => {
                    return{
                        alergia,
                    }
                }) : []
            }; 

            await model.updateUsers(nuevoUser, userId);

            console.log(nuevoUser);
            res.send({message:"Perfil modificado con exito", userData: nuevoUser});
            
        } catch (error) {
            console.log(error);
            res.send({message:"Hubo un error al modificar el perfil"});
        }
    });

    appUser.post("/user/getUserById", async function(req, res){
        try {
            let userId = { _id: req.body._id };
            let user = await model.getUserById(userId);
            res.send({message:"Candidato encontrado", usuarioEncontrado: user });
        } catch (error) {
            console.log(error);
            res.send({message:"Hubo un error al obtener los datos de los usuarios"});            
        }
    });
}