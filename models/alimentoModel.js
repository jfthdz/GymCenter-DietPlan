const { MongoClient } = require("mongodb");
var ObjectId = require("mongodb").ObjectId;

const dbconfig = {
    connectionString: "mongodb://localhost:27017/planAlimenticioDB"
};
const mongodb = new MongoClient(dbconfig.connectionString);

module.exports = function(){
    this.getAlimentos = async function(){
        try {
            let connection = await mongodb.connect();
            let alimentos = await connection.db().collection("Alimentos").find().toArray();
            await connection.close();

            return alimentos;
        } catch (error) {
            console.log(error);
        }
    }

    this.postAlimento = async function(alimentoData){
        try {
            let connection = await mongodb.connect();
            await connection.db().collection("Alimentos").insertOne(alimentoData);
            await connection.close();

        } catch (error) {
            console.log(error);
        }
    }
}