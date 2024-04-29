const { MongoClient } = require("mongodb");
const { retry } = require("statuses");
const ObjectId = require("mongodb").ObjectId;

const dbconfig = {
    connectionString: "mongodb://localhost:27017/planAlimenticioDB"
}
const mongodb = new MongoClient(dbconfig.connectionString);

module.exports = function(){

    this.findUserLogin = async function(userName, password){
        try {
            let connection = await mongodb.connect();
            let user = await connection.db().collection("Usuarios").findOne({userName: userName, password: password});
            await connection.close();

            return user ? user : false;
        } catch (error) {
            console.error(error);
        }
    }

    this.findUserByUserName = async function(userName){
        try {
            let connection = await mongodb.connect();
            let user = await connection.db().collection("Usuarios").findOne({userName: userName});
            await connection.close();

            return user ? user : false;
        } catch (error) {
            console.error(error);
        }
    }

    this.updatePassword = async function(userId, userNewPassword){
        try {
            console.log(userId, userNewPassword);
            let connection = await mongodb.connect();
            await connection.db().collection("Usuarios").updateOne({_id: new ObjectId(userId)},{$set:{password: userNewPassword}});
            await connection.close();

        } catch (error) {
            console.log(error);
        }
    }

}