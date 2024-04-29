const { MongoClient } = require("mongodb");
const { retry } = require("statuses");
var ObjectId = require("mongodb").ObjectId;

const dbconfig = {
    connectionString: "mongodb://localhost:27017/planAlimenticioDB"
};
const mongodb = new MongoClient(dbconfig.connectionString);

module.exports = function(){
    this.getUsers = async function(){
        try {
            let connection = await mongodb.connect();
            let users = await connection.db().collection("Usuarios").find().toArray();
            await connection.close();

            return users;
        } catch (error) {
            console.log(error);
        }
    }

    this.postUsers = async function(userData){
        try {
            let connection = await mongodb.connect();
            await connection.db().collection("Usuarios").insertOne(userData);
            await connection.close();

        } catch (error) {
            console.log(error);
        }
    }

    this.updateUsers = async function(userData, userId){
        try {
            let connection = await mongodb.connect();
            await connection.db().collection("Usuarios").updateOne({_id: new ObjectId(userId._id)},{$set:userData});
            await connection.close();

        } catch (error) {
            console.log(error);
        }
    }

    this.getUserById = async function(userId){
        try {
            let connection = await mongodb.connect();
            let user = await connection.db().collection("Usuarios").findOne({_id: new ObjectId(userId._id)});
            await connection.close();

            return user;
        } catch (error) {
            console.log(error);
        }
    }
}