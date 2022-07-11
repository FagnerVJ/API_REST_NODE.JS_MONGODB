import mongoose from "mongoose";

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@exercicio-node.g3tbb.mongodb.net/exercicio-node`)
    
let bd = mongoose.connection;

export default bd;