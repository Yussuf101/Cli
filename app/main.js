require("dotenv").config();
const mongoose = require("mongoose");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;
const { createMovie, findAll, updateMovie, deleteMovie, addUser} = require('./utils');
const { connection } = require("./utils/mysql.js");

const mongoMovie = async () => {     
    if (argv.add) {
        await createMovie(argv.name, argv.year, argv.director); 
    } else if (argv.find) {
        await findAll();
    } else if (argv.updateMovie) {
        await updateMovie(argv.updatename, argv.newname);
    } else if (argv.delete) {
        await deleteMovie(argv.name)
    } else if (argv.deleteall) {
        await deleteAll();
    }    
    process.exit();
}; 
// mongoMovie();

  const sqlMovie = async()=> {
      console.log("sqlMovie is playing")
    try {
        await connection.authenticate();
        console.log("Connection is established")
        if(argv.addUser){
            await addUser(argv.name, argv.movieid);
            console.log("added user")
        } else if (argv.update) {
            await updateUser(argv.name, argv.newname);
            console.log(`Updated ${argv.name}`)
        } else if (argv.find) {
            await findCustomer(argv.name);
        }
        else if (argv.deletecustomer) {
            await deleteCustomer(argv.name);
        }

        process.exit();
    } catch (error) {
        console.log(`Connection has not been established: ${error}`);
    }
};

  sqlMovie();




